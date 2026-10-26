import Link from 'next/link';
import type { Metadata } from 'next';
import { getSortedPosts } from '@/lib/posts';
import ScrollRestorer from '@/components/ScrollRestorer';

export const metadata: Metadata = {
  title: 'Blog | LetsCode',
  description:
    'Web development, software, training and coding guides for businesses, schools and learners across Kenya and beyond.',
  alternates: { canonical: 'https://www.letscodeltd.com/blog' },
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-white">
      <ScrollRestorer />

      <h1 className="text-4xl font-bold mb-2 text-white">Blog</h1>
      <p className="text-white/90 mb-10">
        Practical guides on websites, software, training and learning to code in Kenya.
      </p>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-white/30 pb-8">
            <time className="text-sm font-medium text-white/80" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-KE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h2 className="text-2xl font-semibold mt-1 text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-yellow-300 transition">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-white/90">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-yellow-300 font-semibold hover:text-yellow-200"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}