import { getAllPoems, getPoemBySlug } from '@/lib/poems';

export function generateStaticParams() {
  const poems = getAllPoems();
  return poems.map((p) => ({ slug: p.slug }));
}

export default function PoemPage({ params }: any) {
  const poem = getPoemBySlug(params.slug);

  return (
    <main className="container narrow">
      <h1>{poem.title}</h1>
      <p style={{ opacity: 0.5 }}>{poem.date}</p>

      <div className="poem-content">
        {poem.content.split('\n').map((line: string, i: number) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </main>
  );
}
