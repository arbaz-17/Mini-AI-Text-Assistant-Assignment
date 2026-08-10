const PROMPTS = {
  summarize: (text) => `
You are an expert editor.
Summarize the following text into a clear, concise, and well-structured summary. Preserve all key facts, names, dates, numbers, and conclusions. Remove only repetition and unnecessary details. Do not add, assume, or infer any information.
Return only the final summary as plain text. Do not include titles, introductions, explanations, markdown, or code fences.

Text:
${text}
`,

  rewrite: (text) => `
You are an expert editor.
Rewrite the following text to improve clarity, grammar, readability, and flow while preserving the original meaning, tone, and level of detail. Do not add, remove, or alter any factual information.
Return only the rewritten text as plain text. Do not include introductions, explanations, markdown, or code fences.

Text:
${text}
`,
};

const SUPPORTED_MODELS = [
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "openai/gpt-oss-20b:free",
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
];

export async function processAIRequest({ action, text, model }) {
  const promptBuilder = PROMPTS[action];

  const selectedModel = SUPPORTED_MODELS.includes(model)
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
