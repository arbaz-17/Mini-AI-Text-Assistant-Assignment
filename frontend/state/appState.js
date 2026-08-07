export const RequestState = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  CANCELLED: "cancelled",
});

export const AIAction = Object.freeze({
  SUMMARIZE: "summarize",
  REWRITE: "rewrite",
});

export const appState = {
  requestState: RequestState.IDLE,

  currentAction: null,

  response: "",

  error: "",

  abortController: null,
};