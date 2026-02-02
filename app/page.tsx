"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("test").select("*").limit(5);
      setData(data);
      setError(error);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>UCC - Supabase Test</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
