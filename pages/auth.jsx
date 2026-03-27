import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Auth() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) window.location.href = "/dashboard";
    });
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Login or Signup</h1>
      <button onClick={signInWithGoogle} className="px-4 py-2 bg-red-500 text-white rounded">
        Continue with Google
      </button>
    </div>
  );
}