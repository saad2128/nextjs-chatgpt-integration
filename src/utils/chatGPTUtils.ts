import { ChatCompletionRequestMessage } from 'openai';

export const sendMessageToChatGPT = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/chatGPTHandler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response.json();
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};
