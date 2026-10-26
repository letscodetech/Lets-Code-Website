'use client';

import { useEffect } from 'react';

const KEY = 'blog-scroll-y';

export default function ScrollRestorer() {
  useEffect(() => {
    // Restore the saved position (set when a post link was clicked)
    const saved = sessionStorage.getItem(KEY);
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (saved !== null) {
      const y = parseInt(saved, 10) || 0;

      // Try a few times, because Next.js may scroll to the top after the page renders
      [0, 60, 150].forEach((delay) => {
        timers.push(setTimeout(() => window.scrollTo(0, y), delay));
      });

      // Clear the saved value so a fresh visit starts at the top
      timers.push(setTimeout(() => sessionStorage.removeItem(KEY), 400));
    }

    // Save the position whenever a post link is clicked
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      const href = link?.getAttribute('href') ?? '';
      if (href.startsWith('/blog/')) {
        sessionStorage.setItem(KEY, String(window.scrollY));
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}