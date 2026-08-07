# App State

## 1. Overview

Centralized state management for the application. It stores the current request status, selected AI action, selected model, generated response, error message, and AbortController instance.

---

## 2. Responsibilities

- Define available request states.
- Define supported AI actions.
- Store the application's shared state.
- Provide a single source of truth for the frontend.

---

## 3. Key Exports

### RequestState

```javascript
RequestState
```

Defines all possible request lifecycle states.

### AIAction

```javascript
AIAction
```

Defines supported AI operations.

### appState

```javascript
appState
```

Stores the application's current state.

---

## 4. Data Flow

```
User Action
      │
      ▼
app.js
      │
      ▼
Update appState
      │
      ▼
renderer.js
      │
      ▼
Update UI
```

---

## 5. Notes

- Uses `Object.freeze()` to prevent modification of constants.
- Acts as the central state container for the application.
- Shared across multiple frontend modules.