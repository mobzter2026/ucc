"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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
      <h1>Supabase test</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <h2>Error</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </main>
  );
}
