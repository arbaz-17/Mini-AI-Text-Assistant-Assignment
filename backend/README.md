# Backend

## 1. Name

Backend

---

## 2. Overview

The backend acts as a Backend-for-Frontend (BFF) between the frontend and the OpenRouter API. It securely manages API keys, validates incoming requests, prepares AI prompts, communicates with the AI provider, and returns standardized responses to the frontend.

---

## 3. Responsibilities

- Expose AI API endpoints.
- Validate incoming requests.
- Process AI actions.
- Manage AI prompts.
- Communicate with OpenRouter.
- Protect API credentials.
- Return standardized responses.

---

## 4. Core Files

### server.js

Acts as the application's entry point.

**Responsibilities**

- Initialize the Express server.
- Load environment variables.
- Configure middleware.
- Register API routes.
- Start the HTTP server.

---

### routes/

Defines the application's API endpoints.

**Responsibilities**

- Receive frontend requests.
- Validate request payloads.
- Delegate processing to the service layer.
- Return standardized success and error responses.

**Endpoint**

```http
POST /api/ai
```

---

### services/

Contains the application's business logic.

**Responsibilities**

- Build AI prompts.
- Validate supported AI models.
- Communicate with OpenRouter.
- Process AI responses.
- Return generated text.

---

## 5. Request Flow

```text
Frontend
    │
    ▼
server.js
    │
    ▼
routes/
    │
    ▼
services/
    │
    ▼
OpenRouter API
    │
    ▼
AI Response
    │
    ▼
Frontend
```

---

## 6. Notes

- Built using Express.js.
- Implements a Backend-for-Frontend (BFF) architecture.
- Keeps API keys secure using environment variables.
- Separates routing from business logic for better maintainability.