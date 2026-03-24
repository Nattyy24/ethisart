import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  const { query, id } = req.query;

  try {
    let { data, error } = id
      ? await supabase.from("images").select("*").eq("id", id)
      : query
      ? await supabase.from("images").select("*").ilike("title", `%${query}%`)
      : await supabase.from("images").select("*").order("created_at", { ascending: false });

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch images" });
  }
}