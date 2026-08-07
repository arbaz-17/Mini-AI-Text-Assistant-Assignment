import { appState, RequestState, AIAction } from "../state/appState.js";

import {
  summarizeButton,
  rewriteButton,
  statusSection,
  outputSection,
  outputText,
} from "./dom.js";

import {
  clearElement,
  createButton,
  createStatusMessage,
  setButtonsDisabled,
  hideElement,
  showElement,
} from "./domHelpers.js";

export function render(onCancel, onRetry) {
  switch (appState.requestState) {
    case RequestState.IDLE:
      renderIdle();
      break;

    case RequestState.LOADING:
      renderLoading(onCancel);
      break;

    case RequestState.SUCCESS:
      renderSuccess();
      break;

    case RequestState.ERROR:
      renderError(onRetry);
      break;

    case RequestState.CANCELLED:
      renderCancelled();
      break;

    default:
      renderIdle();
  }
}

function renderIdle() {
  setButtonsDisabled([summarizeButton, rewriteButton], false);

  clearElement(statusSection);

  hideElement(outputSection);
}

function renderLoading(onCancel) {
  setButtonsDisabled([summarizeButton, rewriteButton], true);

  hideElement(outputSection);

  clearElement(statusSection);

  const actionText =
    appState.currentAction === AIAction.SUMMARIZE
      ? "Generating summary..."
      : "Rewriting text...";

  const message = createStatusMessage(actionText, "status-loading");

  const cancelButton = createButton({
    id: "cancel-btn",
    text: "Cancel",
    onClick: onCancel,
  });

  statusSection.append(message, cancelButton);
}

function renderSuccess() {
  setButtonsDisabled([summarizeButton, rewriteButton], false);

  clearElement(statusSection);

  showElement(outputSection);

  outputText.value = appState.response;
}

function renderError(onRetry) {
  setButtonsDisabled([summarizeButton, rewriteButton], false);

  hideElement(outputSection);

  clearElement(statusSection);

  const message = createStatusMessage(appState.error, "status-error");

  const retryButton = createButton({
    id: "retry-btn",
    text: "Retry",
    onClick: onRetry,
  });

  statusSection.append(message, retryButton);
}

function renderCancelled() {
  setButtonsDisabled([summarizeButton, rewriteButton], false);

  hideElement(outputSection);

  clearElement(statusSection);

  const message = createStatusMessage("Request cancelled.", "status-cancelled");

  statusSection.append(message);
}
