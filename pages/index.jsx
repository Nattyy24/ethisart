import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PromptBox from "../components/PromptBox";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <Navbar />
      <header className="text-center py-10 bg-gray-200">
        <h1 className="text-4xl font-bold mb-4">Generate AI Images with Ethisart</h1>
        <p className="text-gray-700">Enter a prompt and let AI create stunning images!</p>
      </header>
      <main className="container mx-auto my-8">
        <PromptBox onImagesGenerated={setImages} />
        <ImageGrid images={images} />
      </main>
      <Footer />
    </div>
  );
}