# AI Backend Service

## 1. Overview

The services layer contains the application's business logic. It prepares AI prompts, validates the selected model, communicates with the OpenRouter API, and returns the generated response to the route layer.

---

## 2. Responsibilities

- Build AI prompts.
- Validate the selected AI model.
- Communicate with the OpenRouter API.
- Handle API errors.
- Return the generated AI response.

---

## 3. Files

### aiService.js

Handles AI request processing and OpenRouter integration.

**Key Components**

#### Prompt Templates

Defines specialized prompts for:

- Summarize
- Rewrite

---

#### Supported Models

Maintains a whitelist of supported AI models and falls back to the default model when an unsupported model is received.

---

#### processAIRequest()

```javascript
processAIRequest({ action, text, model })
```

**Responsibilities**

- Validate the requested AI action.
- Validate the selected AI model.
- Build the final AI prompt.
- Send the request to OpenRouter.
- Process the AI response.
- Return the generated text.

---

## 4. Basic Flow

```text
Route
   │
   ▼
Validate Action
   │
   ▼
Select Prompt
   │
   ▼
Validate Model
   │
   ▼
OpenRouter API
   │
   ▼
Process Response
   │
   ▼
Return Generated Text
```

---

## 5. Notes

- Uses environment variables to securely access the OpenRouter API.
- Supports multiple AI models through a validated whitelist.
- Separates prompt generation from route handling.
- Centralizes all AI-related business logic in a single service.