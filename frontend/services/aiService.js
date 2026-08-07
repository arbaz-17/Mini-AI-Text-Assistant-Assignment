const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/ai"
    : "https://of-internship-week4-assignment.vercel.app/api/ai";

export async function generateAIResponse(action, text, model, signal) {
  const response = await fetch(BASE_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    signal,

    body: JSON.stringify({
      action,
      text,
      model,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data.data;
}
