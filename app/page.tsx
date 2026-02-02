import { supabase } from "@/lib/supabase";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const { data, error } = await supabase.from("test").select("*").limit(5);
  
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>UCC - Supabase Test</h1>
      <h2>Data from Supabase:</h2>
      <pre style={{ background: '#f4f4f4', padding: 12, borderRadius: 4 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
      {error && (
        <>
          <h2>Error:</h2>
          <pre style={{ background: '#fee', padding: 12, borderRadius: 4 }}>
            {JSON.stringify(error, null, 2)}
          </pre>
        </>
      )}
    </main>
  );
}
