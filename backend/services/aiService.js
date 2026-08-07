const PROMPTS = {
  summarize: (text) => `
Summarize the following text clearly and concisely.

Text:
${text}
`,

  rewrite: (text) => `
Rewrite the following text while preserving its meaning.
Make it professional and easy to read.

Text:
${text}
`,
};

const SUPPORTED_MODELS = [
  "google/gemma-4-31b-it:free",
  "openai/gpt-oss-20b:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "qwen/qwen3-30b-a3b:free",
];

export async function processAIRequest({ action, text, model }) {
  const promptBuilder = PROMPTS[action];

  const selectedModel =
  SUPPORTED_MODELS.includes(model)
    ? model
    : process.env.AI_MODEL;

  if (!promptBuilder) {
    throw new Error("Unsupported AI action.");
  }

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: selectedModel,
        messages: [
          {
            role: "user",
            content: promptBuilder(text),
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();

    console.error("OpenRouter Error:", errorData);

    throw new Error(errorData.error?.message || "Failed to fetch AI response.");
  }

  const data = await response.json();

  return data.choices[0].message.content;
}
