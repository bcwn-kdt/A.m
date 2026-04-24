import Link from 'next/link';
import { getAllPoems } from '@/lib/poems';

export default function Home() {
  const poems = getAllPoems();

  return (
    <main className="container">
      <section style={{ marginBottom: 100 }}>
        <h1 className="hero-title">Khi Đêm Thở</h1>
        <p style={{ opacity: 0.6 }}>
          Có những lời chỉ đêm mới hiểu
        </p>
      </section>

      {poems.map((p) => (
        <div key={p.slug} className="poem-card">
          <Link href={`/tho/${p.slug}`}>
            <h2>{p.title}</h2>
            <p style={{ opacity: 0.6 }}>{p.excerpt}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}
