import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  content: string; // Markdown
};

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function readMarkdownPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const date =
        data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date);

      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title),
        description: String(data.description ?? ''),
        date,
        content: content.trim(),
      };
    });
}

export const posts: Post[] = readMarkdownPosts();

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}