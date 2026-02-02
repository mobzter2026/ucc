import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data } = await supabase.from('test').select('*')

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
