## 1. Name

Frontend

---

## 2. Overview

The frontend provides the user interface for the AI Text Assistant. It captures user input, manages interactions, communicates with the backend API, and renders the application's request lifecycle.

---

## 3. Responsibilities

- Render the user interface.
- Handle user interactions.
- Manage application state.
- Send AI requests to the backend.
- Display loading, success, error, and cancelled states.
- Support multiple AI models.

---

## 4. Core Files

### index.html

Defines the application's structure and UI components.

**Contains**

- Application layout
- Model selector
- Text input
- Action buttons
- Status section
- Output section

---

### app.js

Acts as the application's main orchestrator. It coordinates communication between the user interface, application state, service layer, and renderer to manage the complete AI request lifecycle.

**Responsibilities**

- Initialize the application.
- Register all event listeners.
- Handle user interactions.
- Validate user input.
- Manage AI request states.
- Coordinate API communication.
- Update the centralized application state.
- Trigger UI rendering.

**Core Features**

- Load predefined sample text.
- Summarize text using the selected AI model.
- Rewrite text using the selected AI model.
- Handle model selection.
- Cancel active AI requests using `AbortController`.
- Retry failed requests.
- Display loading, success, error, and cancelled states.

**Request Lifecycle**

```text
User Interaction
        │
        ▼
Input Validation
        │
        ▼
Initialize Request
        │
        ▼
Call AI Service
        │
        ▼
Receive Response
        │
        ▼
Update Application State
        │
        ▼
Render Updated UI
```

**Collaborates With**

- **state/** → Stores and updates application state.
- **services/** → Sends requests to the backend API.
- **ui/** → Renders the interface based on the current state.
- **utils/** → Provides reusable constants and sample data.

## 5. Basic Flow

```text
User
   │
   ▼
index.html
   │
   ▼
app.js
   │
   ├──────────────► State
   │
   ├──────────────► Services
   │
   └──────────────► UI
                     │
                     ▼
              Update Interface
```

---

## 6. Notes

- Uses Vanilla HTML, CSS, and JavaScript (ES Modules).
- Follows a modular architecture with clear separation of concerns.
- `app.js` acts as the orchestration layer while feature-specific logic is delegated to dedicated modules.