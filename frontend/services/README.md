# AI Service

## 1. Overview

Handles communication between the frontend and the backend AI API. It sends AI requests, processes the response, and throws appropriate errors when a request fails.

---

## 2. Responsibilities

- Send AI requests to the backend.
- Pass the selected action, text, and model.
- Support request cancellation using AbortController.
- Handle API errors.
- Return the generated AI response.

---

## 3. Key Functions

### generateAIResponse()

```javascript
generateAIResponse(action, text, model, signal)
```

**Parameters**

- `action` - AI operation (Summarize / Rewrite)
- `text` - User input
- `model` - Selected AI model
- `signal` - AbortController signal for request cancellation

**Returns**

```javascript
Promise<string>
```

Returns the generated AI response.

---

## 4. Basic Flow

```
app.js
    │
    ▼
generateAIResponse()
    │
    ▼
POST /api/ai
    │
    ▼
Express Backend
    │
    ▼
AI Response
    │
    ▼
Return Result
```

---

## 5. Notes

- Uses the Fetch API.
- Supports request cancellation via `AbortController`.
- Throws an error when the backend returns an unsuccessful response.