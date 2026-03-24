import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { prompt, style } = req.body;

  try {
    const response = await openai.createImage({
      prompt: `${prompt} in ${style} style`,
      n: 4,
      size: "1024x1024",
    });

    const images = response.data.data.map(img => ({ url: img.url, title: prompt }));
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to generate images" });
  }
}