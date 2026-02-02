import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("test").select("*").limit(5);

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Supabase test</h1>

      <h2>Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h2>Error</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </main>
  );
}
