// src/app/layout.tsx
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { spaceMono } from '../styling/font'; 
import '../app/globals.css'; // Import your global CSS

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} dark:bg-gray-800 min-h-screen`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
