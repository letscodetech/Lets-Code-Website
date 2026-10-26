import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPost, posts } from '@/lib/posts';
import { getCta, whatsappLink } from '@/lib/cta';
import PostBody from '@/components/PostBody';

const SITE = 'https://www.letscodeltd.com';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} | LetsCode`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const cta = getCta(post.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'LetsCode' },
    publisher: { '@type': 'Organization', name: 'LetsCode', url: SITE },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/blog" className="text-sm font-medium text-yellow-300 hover:text-yellow-200">
        ← Back to blog
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-white">{post.title}</h1>
      <time className="block text-sm font-medium text-white/80 mb-8" dateTime={post.date}>
        {new Date(post.date).toLocaleDateString('en-KE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}{' '}
        · By LetsCode
      </time>

      <PostBody content={post.content} />

      <div className="mt-12 rounded-2xl bg-white p-6 text-center shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{cta.title}</h3>
        <p className="text-gray-700 mb-4">{cta.text}</p>
        <a
          href={whatsappLink(cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
        >
          {cta.button}
        </a>
      </div>
    </main>
  );
}