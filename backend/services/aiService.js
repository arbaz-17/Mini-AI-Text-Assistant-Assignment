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

export async function processAIRequest({ action, text }) {
  const promptBuilder = PROMPTS[action];

  if (!promptBuilder) {
    throw new Error("Unsupported AI action.");
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.AI_MODEL,
      messages: [
        {
          role: "user",
          content: promptBuilder(text),
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch AI response.");
  }

  const data = await response.json();

  return data.choices[0].message.content;
}