import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner"; // Import the spinner

export default function PromptBox({ onImagesGenerated }) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return; // prevent empty prompt
    setLoading(true); // show spinner
    try {
      const res = await axios.post("/api/generate", { prompt, style });
      onImagesGenerated(res.data); // update images in parent
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      setLoading(false); // hide spinner
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
      <input
        type="text"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Describe your image..."
        className="w-full p-3 mb-2 rounded border focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <select
        value={style}
        onChange={e => setStyle(e.target.value)}
        className="w-full mb-2 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="realistic">Realistic</option>
        <option value="cartoon">Cartoon</option>
        <option value="3d">3D</option>
        <option value="abstract">Abstract</option>
      </select>
      <button
        onClick={handleGenerate}
        className="px-6 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg hover:scale-105 transition-transform w-full"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {/* Show spinner while loading */}
      {loading && <Spinner />}
    </div>
  );
}