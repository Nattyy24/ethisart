import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [images, setImages] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchImages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (!error) setImages(data);
      setLoading(false);
    };
    fetchImages();
  }, [user]);

  if (!user) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Your Generated Images</h1>
        {loading ? <Spinner /> : images.length ? <Grid images={images} /> : <p>No images yet.</p>}
      </main>
      <Footer />
    </div>
  );
}