# AGENT INSTRUCTIONS: canvas_to_worker

This document is for AI agents (like Jules) interacting with the `canvas_to_worker` Cloudflare Worker.

## 1. Project Purpose

This worker is an **automated factory and orchestrator**. Its primary purpose is to convert a Gemini Canvas artifact (raw HTML/JS/CSS) into a live, production-ready Cloudflare Worker, complete with a dedicated GitHub repository, CI/CD, and a task for an improvement agent (Jules).

## 2. Core Architecture

* **Framework:** Hono
* **API:** Fully typed RESTful and WebSocket API.
* **API Spec:** Dynamically generated OpenAPI 3.1.0 spec at `/openapi.json` and `/openapi.yaml`. All API routes are built from Zod schemas for validation and type safety.
* **Database:** Uses a D1 database (`DB` binding) via Drizzle ORM for all internal logging and project tracking.
* **Logging:** Real-time deployment and orchestration logs are streamed to the client via a WebSocket (`/ws`).

## 3. Internal D1 Database Schema (`DB` Binding)

This worker logs all its own activities. When debugging or extending, query this D1 database:

* **`projects`**: Tracks every new worker project this factory creates.
    * `id`: Unique project ID.
    * `repositoryName`: Name of the new GitHub repo.
    * `repoUrl`: URL of the new GitHub repo.
    * `workerUrl`: The `.workers.dev` URL of the newly deployed canvas.
    * `status`: e.g., 'pending', 'deploying', 'live', 'failed'.
    * `julesTaskId`: The ID returned from the `JULES_API` after handoff.
* **`operations_log`**: A detailed, step-by-step log for each project.
    * `id`: Log entry ID.
    * `project_id`: Foreign key to `projects`.
    * `step_name`: (e.g., 'create_repo', 'generate_wrangler', 'provision_worker', 'handoff_to_jules').
    * `status`: 'success' or 'error'.
    * `message`: Details or error message.
    * `timestamp`: Time of the event.
* **`api_requests`**: Logs all incoming API requests for security and debugging.
    * `endpoint`: e.g., `/deploy`.
    * `method`: e.g., `POST`.
    * `payload`: (Partial) request body.
    * `ip_address`: Requesting IP.

## 4. Service Bindings (External Dependencies)

This worker **orchestrates** other services. Its core logic depends entirely on these bindings.

* **`AI: Ai`**
    * **Purpose:** Used to process the user's natural language `improvementPrompt`.
    * **Action:** It refines the user's raw text into a structured, optimized, and context-rich prompt *for* the Jules agent, ensuring Jules has clear instructions.

* **`CORE_GITHUB_API: Service`**
    * **Purpose:** Manages all GitHub-related tasks.
    * **Actions:**
        1.  Creates a new **private** GitHub repository for the project.
        2.  Commits and pushes the initial set of files (`index.html`, `wrangler.jsonc`, `package.json`, `JULES_PROMPT.md`, `AGENTS.md`) to the new repo.

* **`CORE_CF_MGMT_API: Service`**
    * **Purpose:** This is the Cloudflare "easy button." It provisions all Cloudflare resources.
    * **Actions:**
        1.  Creates a new Cloudflare Worker project.
        2.  Links this new worker to the new GitHub repository.
        3.  Sets up the CI/CD trigger (e.g., "Deploy on push to `main`").
        4.  Sets the CI/CD deploy command to `npm install && npm run deploy`.
        5.  Triggers the **first deployment** to make the canvas HTML live.
        6.  *(Self-Note: This service is also what the "Wrangler Factory" will eventually call to provision bindings like D1/R2 for the *new* worker, but this factory calls it to provision the worker itself.)*

* **`JULES_API: Service`**
    * **Purpose:** Asynchronous handoff for code improvement.
    * **Action:** After the new worker is live (serving the canvas), this factory calls the `JULES_API` to create a new improvement task. It passes the `repoUrl`, the AI-refined prompt, and the full `wrangler.jsonc` (so Jules knows what bindings are available).

## 5. Core API Endpoints & Orchestration

* **`GET /`**: Serves the frontend UI.
* **`GET /openapi.json` | `/openapi.yaml`**: **(Agent-Critical)** Provides the full, dynamic OpenAPI 3.1.0 spec. **Always check this for `operationId`s and schemas.**
* **`GET /ws`**: WebSocket endpoint. The frontend uses this to receive real-time log updates for the `POST /deploy` operation.
* **`POST /deploy`**: The main orchestration flow.
    1.  **Input:** `repositoryName`, `canvasCode`, `improvementPrompt`.
    2.  **Validate & Log:** Validates input with Zod, logs to `api_requests`, and creates a `projects` entry in D1.
    3.  **Refine Prompt:** Calls `AI` binding to refine `improvementPrompt`.
    4.  **Create Repo:** Calls `CORE_GITHUB_API` to create the private repo.
    5.  **Run "Wrangler Factory":** A critical internal function.
        * It generates a `wrangler.jsonc` for the *new* project.
        * It **always** configures the worker to serve the `index.html` (the `canvasCode`).
        * It analyzes the `improvementPrompt` for keywords (e.g., "database," "AI," "storage").
        * It provisions any needed bindings (D1, R2, AI) by adding them to the generated `wrangler.jsonc`. **Note: The *provisioning* of the resources themselves is handled by `CORE_CF_MGMT_API`, but the *configuration* is generated here.**
    6.  **Generate Files:** Creates `index.html`, `package.json` (with `deploy` scripts that run D1 migrations), `JULES_PROMPT.md`, and this `AGENTS.md` file.
    7.  **Push Files:** Calls `CORE_GITHUB_API` to push all files to the new repo.
    8.  **Deploy Worker:** Calls `CORE_CF_MGMT_API` to create the worker, link the repo, set up CI/CD, and trigger the first build.
    9.  **Respond to User:** Waits for the worker URL and responds to the user with `{"success": true, "workerUrl": "...", "repoUrl": "..."}`.
    10. **Async Handoff:** *After* responding, calls `JULES_API` with the `repoUrl` and the refined prompt to start the improvement task.

## 6. Development Instructions

* **Modifying API:** All API changes **MUST** be made in the Hono routes and their corresponding Zod schemas. This is required to keep the `/openapi.json` spec accurate for agent consumption.
* **Database:** All database changes **MUST** be accompanied by a new Drizzle migration file.
