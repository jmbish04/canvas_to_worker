AGENT INSTRUCTIONS: canvas_to_worker Factory

1. Overview

This worker is an orchestration factory. It does not just serve content; it actively provisions infrastructure. Its purpose is to take raw HTML/JS/CSS (a "Canvas artifact") and turn it into a fully independent Cloudflare Worker project with its own GitHub repo, CI/CD pipeline, and an active improvement task assigned to the Jules agent.

2. Architecture & Tech Stack

Framework: Hono (v4+) with @hono/zod-openapi for typed endpoints and auto-generated documentation.

Database: D1 (binding: DB) accessed via Drizzle ORM. Used for structured logging of every operation.

AI: Workers AI (binding: AI) used for refining raw user prompts before sending them to Jules.

Logging:

Persistent: D1 operations_log table.

Real-time: Durable Object LogStreamerDO (binding: LOG_STREAMER) which broadcasts to WebSocket clients connected to /ws.

3. External Dependencies (Service Bindings)

This worker cannot function without these bindings. It delegates all heavy lifting to specialized microservices:

Binding

Service Name

Purpose

CORE_GITHUB_API

core-github-api

Creating private repos, committing initial code (index.html, wrangler.jsonc).

CORE_CF_MGMT_API

core-cloudflare-management-api

Provisioning the new worker, setting up its CI/CD triggers, and triggering the first deployment.

JULES_API

core-jules-api

Receiving the handoff after the initial deployment to begin iterative improvements.

4. Internal Database Schema (D1)

Agents debugging this worker should query these tables in the DB binding:

projects

id (TEXT, PK): UUID of the project.

repository_name (TEXT): Name of created GH repo.

repo_url (TEXT): Full URL to the GH repo.

worker_url (TEXT): The live URL of the deployed canvas.

status (TEXT): pending -> provisioning -> deployed -> handed_off (or failed).

operations_log

id (INT, PK, Auto): Log sequence.

project_id (TEXT, FK): Links to projects.id.

step (TEXT): e.g., INIT_REPO, GENERATE_WRANGLER, PROVISION_WORKER, JULES_HANDOFF.

status (TEXT): started, success, error.

details (TEXT): JSON payload with extra info or error stack traces.

5. Key Orchestration Logic (POST /deploy)

The core logic resides in the POST /deploy handler. It follows this strict sequence:

Validation & Init: Validate Zod schema, create projects record (status: pending).

Prompt Refinement (Async): Call AI to turn the user's rough request into a structured Jules prompt.

Repo Creation: Call CORE_GITHUB_API to make the private repo.

Artifact Generation:

Create index.html from user input.

Dynamic wrangler.jsonc: Analyze user prompt for keywords (e.g., "database" -> add D1 binding config). Always include standard static asset config.

Create package.json with a deploy script that handles migrations if necessary.

Initial Push: Call CORE_GITHUB_API to push these files to main.

Provisioning: Call CORE_CF_MGMT_API to create the actual Worker and set up the CI/CD connection to the new repo.

User Response: Return 200 OK with the new repo_url and worker_url immediately once provisioned.

Handoff (Async): After responding to the user, call JULES_API with the new repo details to start the improvement cycle.
