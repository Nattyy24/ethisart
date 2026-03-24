import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">About Ethisart</h1>
        <p className="text-lg text-gray-700 mb-4">
          Ethisart is a free AI-powered image generation platform that allows users to create, download, and share stunning images in various styles including realistic, cartoon, 3D, and abstract.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to make AI creativity accessible to everyone. Whether you are an artist, designer, or hobbyist, Ethisart empowers you to bring your ideas to life.
        </p>
      </main>
      <Footer />
    </div>
  );
}