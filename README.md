# AI Text Assistant - Week 4 Assignment

## Overview

AI Text Assistant is a Vanilla JavaScript application created as the Week 4 internship assignment.

The application allows users to summarize and rewrite text using multiple AI models through the OpenRouter API. It demonstrates a complete AI request lifecycle including loading, cancellation, retry, error handling, model selection, and secure API communication using a Backend-for-Frontend (BFF) architecture.

The project is built using:

- HTML
- CSS
- Vanilla JavaScript (ES Modules)
- Express.js
- OpenRouter API

---

## What Was Created

- Text summarization
- Text rewriting
- Multiple AI model selection
- Express Backend-for-Frontend (BFF)
- Secure API key management using environment variables
- Loading state
- Error state
- Request cancellation using `AbortController`
- Retry failed requests
- Dynamic status messages
- Sample text loader
- Responsive user interface
- Modular project architecture
- Individual module documentation

---

## Project Structure

```text
OF-Internship-Week4-Assignment/
│
├── backend/
│   ├── routes/
│   │   ├── ai.js
│   │   └── README.md
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   └── README.md
│   │
│   ├── server.js
│   ├── README.md
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   └── README.md
│   │
│   ├── state/
│   │   ├── appState.js
│   │   └── README.md
│   │
│   ├── ui/
│   │   ├── dom.js
│   │   ├── domHelpers.js
│   │   ├── renderer.js
│   │   └── README.md
│   │
│   ├── utils/
│   │   └── sampleText.js
│   │
│   ├── app.js
│   ├── index.html
│   └── README.md
│
├── .gitignore
└── README.md
```

---

## Module Responsibilities

| File / Folder | Responsibility |
|----------------|----------------|
| `frontend/index.html` | Defines the application's structure, including the model selector, input area, action buttons, status section, and output section. |
| `frontend/app.js` | Acts as the application orchestrator by handling user interactions, request lifecycle, state updates, and UI rendering. |
| `frontend/state/` | Stores the application's shared state, request lifecycle, selected model, and AI actions. |
| `frontend/services/` | Sends AI requests to the backend and handles API communication. |
| `frontend/ui/` | Manages DOM elements, reusable UI helpers, and renders different application states. |
| `frontend/utils/` | Stores reusable utilities such as predefined sample text. |
| `backend/server.js` | Configures the Express server, middleware, routes, and application startup. |
| `backend/routes/` | Defines API endpoints, validates requests, and delegates processing to the service layer. |
| `backend/services/` | Builds AI prompts, validates models, communicates with OpenRouter, and processes AI responses. |

---

## Week 4 Concepts Used

### AI API Integration

Integrated the OpenRouter API through an Express Backend-for-Frontend to securely communicate with multiple AI models.

### Backend-for-Frontend (BFF)

Implemented a lightweight Express backend to protect API keys, validate requests, and centralize AI communication.

### Environment Variables

Stored sensitive API credentials securely using environment variables instead of exposing them in the frontend.

### AI Request Lifecycle

Implemented complete request state management including:

- Idle
- Loading
- Success
- Error
- Cancelled

### AbortController

Supported request cancellation using the browser's `AbortController` API.

### Error Handling

Used `try...catch` blocks with user-friendly error messages and retry functionality.

### Fetch API

Used the Fetch API on both the frontend and backend to communicate with the Express server and OpenRouter.

### DOM Manipulation

Updated the interface dynamically based on the application's current request state.

### Browser Events

Handled:

- Button clicks
- Model selection changes
- Request cancellation
- Retry actions
- Sample text loading

### Modular Architecture

Separated the application into dedicated modules for state management, services, UI rendering, utilities, routing, and AI processing.


## Demo

**Live Demo:** [Week 4 Assignment Live Demo](https://of-internship-week4-ai-assignment.vercel.app/)
