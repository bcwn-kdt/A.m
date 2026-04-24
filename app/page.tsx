import Link from 'next/link';
import { getAllPoems } from '@/lib/poems';

export default function Home() {
  const poems = getAllPoems();

  return (
    <main style={{ padding: "80px 20px", maxWidth: 1100, margin: "auto" }}>
      
      {/* HERO */}
      <section style={{ marginBottom: 100 }}>
        <h1 style={{ fontSize: 72, marginBottom: 20 }}>
          Khi Đêm Thở
        </h1>
        <p style={{ opacity: 0.6 }}>
          Có những lời chỉ đêm mới hiểu
        </p>
      </section>

      {/* LIST POEMS */}
      <section>
        {poems.map((p) => (
          <div key={p.slug} style={{
            marginBottom: 40,
            padding: 24,
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <Link href={`/tho/${p.slug}`}>
              <h2>{p.title}</h2>
              <p style={{ opacity: 0.6 }}>
                {p.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </section>

    </main>
  );
}
