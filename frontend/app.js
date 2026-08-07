import { AIAction, appState, RequestState } from "./state/appState.js";

import { generateAIResponse } from "./services/aiService.js";

import { summarizeButton, rewriteButton, textInput } from "./ui/dom.js";

import { render } from "./ui/renderer.js";

summarizeButton.addEventListener("click", () => {
  handleAIRequest(AIAction.SUMMARIZE);
});

rewriteButton.addEventListener("click", () => {
  handleAIRequest(AIAction.REWRITE);
});

async function handleAIRequest(action) {
  const text = textInput.value.trim();

  if (!validateInput(text)) {
    return;
  }

  initializeRequest(action);

  updateUI();

  try {
    const response = await generateAIResponse(
      action,
      text,
      appState.abortController.signal,
    );

    handleSuccess(response);
  } catch (error) {
    handleFailure(error);
  }

  updateUI();
}
function initializeRequest(action) {
  appState.currentAction = action;

  appState.response = "";

  appState.error = "";

  appState.requestState = RequestState.LOADING;

  appState.abortController = new AbortController();
}

function handleSuccess(response) {
  appState.response = response;

  appState.requestState = RequestState.SUCCESS;

  appState.abortController = null;
}

function handleFailure(error) {
  if (error.name === "AbortError") {
    appState.requestState = RequestState.CANCELLED;
  } else {
    appState.error = error.message;

    appState.requestState = RequestState.ERROR;
  }

  appState.abortController = null;
}

function validateInput(text) {
  if (text) {
    return true;
  }

  appState.error = "Please enter some text.";

  appState.requestState = RequestState.ERROR;

  updateUI();

  return false;
}

function cancelRequest() {
  if (!appState.abortController) {
    return;
  }

  appState.abortController.abort();
}

function retryRequest() {
  if (!appState.currentAction) {
    return;
  }

  handleAIRequest(appState.currentAction);
}

function updateUI() {
  render(cancelRequest, retryRequest);
}
updateUI();
