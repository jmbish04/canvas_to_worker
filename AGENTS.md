# AGENT INSTRUCTIONS: canvas_to_worker Factory

## 1. Overview

This worker is an orchestration factory. It does not just serve content; it actively provisions infrastructure. Its purpose is to take raw HTML/JS/CSS (a "Canvas artifact") and turn it into a fully provisioned, deployed, and handed-off Worker-based project.

## 2. Architecture & Tech Stack

- Framework: Hono (v4+) with `@hono/zod-openapi` for typed endpoints and auto-generated documentation.
- Database: D1 (binding: `DB`) accessed via Drizzle ORM. Used for structured logging of every operation.
- AI: Workers AI (binding: `AI`) used for refining raw user prompts before sending them to Jules.
- Logging:
  - Persistent: D1 `operations_log` table.
  - Real-time: Durable Object `LogStreamerDO` (binding: `LOG_STREAMER`) which broadcasts to WebSocket clients connected to `/ws`.

## 3. External Dependencies (Service Bindings)

This worker cannot function without these bindings. It delegates the heavy lifting to specialized microservices.

| Binding             | Service Name                         | Purpose                                                                 |
|---------------------|--------------------------------------|-------------------------------------------------------------------------|
| `CORE_GITHUB_API`   | core-github-api                      | Creating private repos, committing initial code (e.g., `index.html`, `wrangler.jsonc`). |
| `CORE_CF_MGMT_API`  | core-cloudflare-management-api       | Provisioning the new worker, setting up its CI/CD triggers, and triggering the first deployment. |
| `JULES_API`         | core-jules-api                       | Receiving the handoff after the initial deployment to begin iterative improvements. |

## 4. Internal Database Schema (D1)

Agents debugging this worker should query these tables in the `DB` binding.

### projects

| Column           | Type     | Notes                                                        |
|------------------|----------|--------------------------------------------------------------|
| id               | TEXT     | PK: UUID of the project.                                     |
| repository_name  | TEXT     | Name of created GitHub repo.                                 |
| repo_url         | TEXT     | Full URL to the GitHub repo.                                 |
| worker_url       | TEXT     | The live URL of the deployed canvas.                         |
| status           | TEXT     | One of: `pending`, `provisioning`, `deployed`, `handed_off`, `failed`. |

### operations_log

| Column        | Type    | Notes                                               |
|---------------|---------|-----------------------------------------------------|
| id            | INT     | PK, Auto-increment: log sequence.                   |
| project_id    | TEXT    | FK to `projects.id`.                                |
| step          | TEXT    | e.g., `INIT_REPO`, `GENERATE_WRANGLER`, `PROVISION_WORKER`, `JULES_HANDOFF`. |
| status        | TEXT    | `started`, `success`, `error`.                      |
| details       | TEXT    | JSON payload with extra info or error stack traces. |

## 5. Key Orchestration Logic (POST /deploy)

The core logic resides in the `POST /deploy` handler. It follows this strict sequence:

1. Validation & Init
   - Validate request body with Zod schema.
   - Create a `projects` record with `status: pending`.

2. Prompt Refinement (Async)
   - Call the `AI` binding to turn the user's rough request into a structured Jules prompt.

3. Repo Creation
   - Call `CORE_GITHUB_API` to create the private repository.

4. Artifact Generation
   - Create `index.html` from user input.
   - Generate a dynamic `wrangler.jsonc`:
     - Analyze the user prompt for keywords (for example, "database" → add D1 binding config).
     - Always include standard static asset config.
   - Create `package.json` with a deploy script that handles migrations if necessary.

5. Initial Push
   - Call `CORE_GITHUB_API` to push the initial files to `main`.

6. Provisioning
   - Call `CORE_CF_MGMT_API` to create the Worker and set up CI/CD connection to the new repo.

7. User Response
   - Return `200 OK` with `repo_url` and `worker_url` once the worker is provisioned.

8. Handoff (Async)
   - After responding to the user, call `JULES_API` with the new repo details to start the iterative improvement cycle.

---

If you'd like, I can:
- Open a PR with this updated file, or
- Push this change directly to a branch in the repository — tell me which you'd prefer and which branch name to use.
