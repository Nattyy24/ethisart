import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

export default function ImageDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/images?id=${id}`).then(res => setImage(res.data[0]));
  }, [id]);

  if (!image) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <img src={image.url} alt={image.title} className="w-full max-h-[600px] object-contain mb-4"/>
        <h1 className="text-3xl font-bold">{image.title}</h1>
        <p className="text-gray-500">By {image.user_name || "AI"}</p>
        <a href={image.url} download className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded">Download</a>
      </main>
      <Footer />
    </div>
  );
}