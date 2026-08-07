export function clearElement(element) {
  element.replaceChildren();
}

export function createStatusMessage(text, className) {
  const message = document.createElement("p");

  message.className = `status-message ${className}`;
  message.textContent = text;

  return message;
}

export function createButton({
  id,
  text,
  type = "button",
  onClick,
}) {
  const button = document.createElement("button");

  button.id = id;
  button.type = type;
  button.textContent = text;

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
}

export function setButtonsDisabled(buttons, disabled) {
  buttons.forEach((button) => {
    button.disabled = disabled;
  });
}

export function hideElement(element) {
  element.hidden = true;
}

export function showElement(element) {
  element.hidden = false;
}