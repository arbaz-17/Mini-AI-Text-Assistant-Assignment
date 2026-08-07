# UI Layer

## 1. Overview

The UI layer is responsible for rendering and updating the application's user interface. It provides centralized DOM access, reusable DOM helper functions, and renders the interface based on the current application state.

---

## 2. Responsibilities

- Manage DOM element references.
- Provide reusable DOM utility functions.
- Render UI for different request states.
- Show and hide UI sections.
- Update status messages and AI responses.
- Enable and disable action buttons.

---

## 3. Files

### dom.js

Provides centralized access to frequently used DOM elements.

**Exports**

- `textInput`
- `loadSampleButton`
- `summarizeButton`
- `rewriteButton`
- `modelSelect`
- `statusSection`
- `outputSection`
- `outputText`

---

### domHelpers.js

Contains reusable helper functions for common DOM operations.

**Key Functions**

- `clearElement(element)`
- `createStatusMessage(text, className)`
- `createButton(options)`
- `setButtonsDisabled(buttons, disabled)`
- `showElement(element)`
- `hideElement(element)`

---

### renderer.js

Controls the application's UI based on the current request state.

**Supported States**

- Idle
- Loading
- Success
- Error
- Cancelled

**Key Function**

```javascript
render(onCancel, onRetry)
```

---

## 4. Basic Flow

```text
app.js
    │
    ▼
Update appState
    │
    ▼
renderer.js
    │
    ▼
Uses dom.js
    │
    ▼
Uses domHelpers.js
    │
    ▼
Update User Interface
```

---

## 5. Notes

- Follows separation of concerns.
- `dom.js` manages DOM references.
- `domHelpers.js` contains reusable UI utilities.
- `renderer.js` is responsible for rendering the request lifecycle.
- Keeps UI logic modular, reusable, and easy to maintain.