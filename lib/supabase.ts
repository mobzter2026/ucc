import { supabase } from "@/lib/supabase";

export default async function Home() {
  const hasEnv =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const result = hasEnv
    ? await supabase.from("test").select("*").limit(5)
    : { data: null, error: { message: "Missing Supabase env vars on Vercel" } };

  const { data, error } = result as any;

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
