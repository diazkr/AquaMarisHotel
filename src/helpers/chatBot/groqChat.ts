import groq from "./groqClient";

interface ChatCompletionMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function getGroqChatCompletion(messages: ChatCompletionMessage[]) {
  return groq.chat.completions.create({
    messages: messages,
    model: "llama3-8b-8192",
  });
}
