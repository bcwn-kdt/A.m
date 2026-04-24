import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const poemsDirectory = path.join(process.cwd(), 'content/poems');

export function getAllPoems() {
  const files = fs.readdirSync(poemsDirectory);

  return files.map((file) => {
    const filePath = path.join(poemsDirectory, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);

    return {
      ...data,
      content,
      slug: file.replace('.md', '')
    };
  });
}

export function getPoemBySlug(slug: string) {
  const filePath = path.join(poemsDirectory, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    ...data,
    content,
    slug
  };
}
