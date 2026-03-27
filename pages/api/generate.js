import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;

  try {
    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024",
    });

    const images = result.data.map(img => ({
      url: img.url,
      title: prompt
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Image generation failed" });
  }
}
