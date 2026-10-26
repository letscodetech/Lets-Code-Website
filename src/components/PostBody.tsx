'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export default function PostBody({ content }: { content: string }) {
  return (
    <div
      className="prose prose-lg prose-invert max-w-none
        prose-headings:text-white prose-headings:font-bold
        prose-p:text-white/95
        prose-li:text-white/95 prose-li:marker:text-white
        prose-strong:text-white
        prose-a:text-yellow-300 hover:prose-a:text-yellow-200
        prose-th:bg-white/10 prose-th:text-white prose-th:px-3 prose-th:py-2
        prose-td:text-white/95 prose-td:px-3 prose-td:py-2
        prose-thead:border-white/30 prose-tr:border-white/20"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table>{children}</table>
            </div>
          ),
          a: ({ href = '', children }) =>
            href.startsWith('/') ? (
              <Link href={href}>{children}</Link>
            ) : (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}