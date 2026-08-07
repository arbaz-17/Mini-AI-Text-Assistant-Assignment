# AI Route

## 1. Overview

The routes layer defines the application's API endpoints. It receives requests from the frontend, validates incoming data, delegates business logic to the service layer, and returns standardized responses.

---

## 2. Responsibilities

- Define API endpoints.
- Validate incoming request data.
- Delegate AI processing to the service layer.
- Return standardized success and error responses.
- Handle unexpected server errors.

---

## 3. Files

### ai.js

Handles AI-related API requests.

**Endpoint**

```http
POST /api/ai
```

**Expected Request Body**

```json
{
  "action": "summarize | rewrite",
  "text": "User input",
  "model": "Selected AI model"
}
```

**Responsibilities**

- Validate request payload.
- Call the AI service.
- Return generated AI response.
- Handle validation and server errors.

---

## 4. Basic Flow

```text
Frontend
    │
    ▼
POST /api/ai
    │
    ▼
Validate Request
    │
    ▼
AI Service
    │
    ▼
Generate Response
    │
    ▼
Return JSON Response
```

---

## 5. Notes

- Uses Express Router.
- Keeps route handlers lightweight by delegating business logic to the service layer.
- Returns consistent JSON responses for both success and failure cases.