import type { MetadataRoute } from 'next';
import { posts } from '../lib/posts';

const SITE = 'https://www.letscodeltd.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/about', '/classes', '/contacts', '/blog'].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
  }));

  const postPages = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticPages, ...postPages];
}