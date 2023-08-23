import { NextApiRequest, NextApiResponse } from 'next';

export default async function handleChatGPTRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract the required data from the request
    const { messages } = req.body;

    // Retrieve the API key from environment variables
    const apiKey = process.env.CHATGPT_API_KEY;

    // Define the API endpoint URL
    const url = 'https://api.openai.com/v1/chat/completions';

    // Prepare the request body
    const requestBody = {
      messages,
      model: 'gpt-3.5-turbo',
      stream: false,
    };

    // Make the API call
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    // Parse the API response
    const responseData = await response.json();

    // Send a successful response with the API data
    res.status(200).json({ data: responseData });
  } catch (error) {
    // Handle errors and send an appropriate error response
    res.status(500).json({ error: error.message });
  }
}
