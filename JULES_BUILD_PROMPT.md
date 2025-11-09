Here is the modified prompt, incorporating your advanced requirements for a complete, API-driven, and automated worker factory.

-----

### **Prompt for AI Worker Generation (v2)**

**Role:** You are an expert Cloudflare Worker developer, specializing in creating robust, API-driven automation systems. Your task is to build a new Cloudflare Worker that functions as a "Gemini Canvas Worker Factory & Orchestrator."

**Core Goal:** This worker will serve a frontend and expose a full Hono API (REST/WebSocket) for accepting a Gemini Canvas artifact (HTML/JS/CSS) and a natural language improvement prompt. It will then fully automate:

1.  Provisioning a private GitHub repository.
2.  Generating a complete, deployable Cloudflare Worker project (serving the canvas) *including* a CI/CD-ready `wrangler.jsonc` and `package.json`.
3.  Provisioning the new Cloudflare Worker and its CI/CD pipeline via the `core-cloudflare-management-api`.
4.  Triggering the initial deployment so the user can see their canvas live on a `.workers.dev` URL.
5.  Using Worker AI to refine the improvement prompt and asynchronously hand off the new repo to the `jules-api` for enhancements.
6.  Logging all operations and configurations to its own D1 database.

-----

### **Section 1: Worker Components & Bindings**

This worker (the "Factory") must be built with the following internal components and external bindings.

#### **Internal Components:**

  * **API:** A Hono-based API with both RESTful and WebSocket endpoints.
  * **Database:** A D1 database for logging and configuration, accessed via **Drizzle ORM**.
  * **API Documentation:** Dynamically generated OpenAPI 3.1.0 spec from Zod schemas, available at `/openapi.json` and `/openapi.yaml`.

#### **Required Service Bindings (in *this* worker's `wrangler.jsonc`):**

  * **`DB: D1Database`**: This factory worker's *own* D1 database for logging requests, storing project configs, etc.
  * **`AI: Ai`**: A binding to Cloudflare's Worker AI for refining user prompts.
  * **`CORE_GITHUB_API: Service`**: A service binding to your `core-github-api` worker.
  * **`JULES_API: Service`**: A service binding to your `core-jules-api` worker.
  * **`CORE_CF_MGMT_API: Service`**: A service binding to your `core-cloudflare-management-api` worker.

*(Note: You must determine the correct `worker_name` for these service bindings by inspecting the `wrangler.jsonc` files from the provided repositories. If not found, use the repo name as the binding name, e.g., `core-jules-api`.)*

-----

### **Section 2: Detailed Worker Requirements**

#### **1. D1 Database & Schemas (Drizzle)**

You must define Drizzle schemas and implement logic to log all activities.

  * **`projects`**: Stores details for each *created* project (e.g., `id`, `repositoryName`, `repoUrl`, `workerUrl`, `status`).
  * **`operations_log`**: Logs every major step for a project (e.g., `project_id`, `step_name`, `status`, `message`, `timestamp`).
  * **`api_requests`**: Logs all incoming API requests (e.g., `endpoint`, `method`, `payload`, `ip_address`).

#### **2. Hono API Endpoints (Zod-to-OpenAPI)**

All endpoints must be defined using Hono and have Zod schemas for validation. Use `@hono/zod-openapi` to generate the OpenAPI spec.

  * **`GET /` (Frontend):**

      * Serve a simple, self-contained HTML page.
      * The form must accept `repositoryName`, `canvasCode` (textarea), and `improvementPrompt` (textarea).
      * The form should submit to `POST /deploy` and open a WebSocket connection to `GET /ws` to stream logs.

  * **`GET /openapi.json` & `GET /openapi.yaml`:**

      * Dynamically generate and serve an **OpenAPI 3.1.0** specification.
      * **Crucially, every single endpoint (operation) must have a unique `operationId`** for full GPT/agent compliance.

  * **`GET /ws` (WebSocket Log Stream):**

      * Upgrades the connection to a WebSocket.
      * Accepts a query param (e.g., `?op_id=...`).
      * The `POST /deploy` endpoint will publish log messages to a pub/sub system or DO, which this route will use to forward real-time status updates to the correct client.
      * In the OpenAPI spec, document this as a `GET` route with a clear description that it's a WebSocket upgrade.

  * **`POST /deploy` (Core Orchestrator):**
    This is the primary flow. It must be robust and log every step to the D1 `operations_log` table (and stream to `/ws`).

    1.  **Log & Validate:** Secure the endpoint, validate the Zod schema, and log the initial request to `api_requests`. Create a new entry in the `projects` table with a `pending` status.
    2.  **Refine Prompt:** Asynchronously (don't block) call the **`AI` binding** to refine the user's `improvementPrompt` into a structured, optimized prompt for Jules.
    3.  **Create GitHub Repo:** Call the **`CORE_GITHUB_API`** service binding to create a new **private** GitHub repository.
    4.  **Run "Wrangler Factory":**
          * This is a core function. It generates a new `wrangler.jsonc` file for the project being created.
          * **Default Behavior:** The `wrangler.jsonc` *must* be configured to serve the `index.html` file as a static site.
          * **Binding Analysis:** Analyze the `improvementPrompt` for keywords implying new bindings (D1, R2, KV, AI, etc.).
          * **Provisioning:** For *each* new binding needed, add its configuration to the `wrangler.jsonc` (e.g., `[[d1_databases]]`, `[[r2_buckets]]`).
          * **Migrations:** If a D1 binding is added, a `migrations` section must also be added.
          * **Always** create and include this `wrangler.jsonc` file, even if no new bindings are required.
    5.  **Generate Repo Files:**
          * `index.html`: The raw `canvasCode` provided by the user.
          * `wrangler.jsonc`: The file generated by the "Wrangler Factory" in the previous step.
          * `package.json`:
              * Must include `devDependencies` for `wrangler`.
              * Must include a `scripts` section.
              * The `deploy` script *must* handle D1 migrations if a D1 binding exists. Example:
                ```json
                "scripts": {
                  "deploy": "npx wrangler d1 migrations apply YOUR_DB_BINDING_NAME --remote || true && npx wrangler deploy --minify"
                }
                ```
                *(Note: The `|| true` is a simple way to prevent failure if the migration command fails (e.g., no DB or no new migrations).)*
          * `migrations/0000_init.sql`: A placeholder SQL file.
          * `JULES_PROMPT.md`: The *refined* AI-generated prompt from Step 2.
          * `AGENTS.md`: An instruction file for agents.
    6.  **Push to GitHub:** Call the **`CORE_GITHUB_API`** service binding to commit and push all these generated files to the `main` branch.
    7.  **Provision & Deploy Worker:**
          * Call the **`CORE_CF_MGMT_API`** service binding to:
          * a. **Create a new Cloudflare Worker project.**
          * b. **Create a CI/CD trigger** linking the worker to the new GitHub repo (e.g., "Deploy on push to `main`").
          * c. **Set the CI/CD deploy command** to `npm install && npm run deploy`.
          * d. **Manually trigger the first deployment.**
    8.  **Respond to User:**
          * Get the new worker's URL (e.g., `${repositoryName}.your-account.workers.dev`).
          * Update the `projects` table in D1 with the `workerUrl`, `repoUrl`, and `status: 'deployed'`.
          * Return a `200 OK` JSON response to the user with the `workerUrl`, `repoUrl`, and the `julesPrompt`.
    9.  **Async Jules Handoff:**
          * *After* responding to the user, make an asynchronous call to the **`JULES_API`** service binding.
          * Pass the new `repoUrl`, the *refined* Jules prompt, and all binding information from the generated `wrangler.jsonc` to create a new task.
