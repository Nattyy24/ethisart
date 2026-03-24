import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function generateImage(prompt, style = "realistic") {
  const response = await axios.post(
    "https://api.openai.com/v1/images/generations",
    {
      prompt: `${prompt}, style: ${style}`,
      n: 3,
      size: "1024x1024"
    },
    {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );
  return response.data.data; // array of images
}