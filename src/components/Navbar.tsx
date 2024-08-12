'use client'; // Ensure this directive is present for Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { spaceMono } from '../styling/font'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white text-black z-50 shadow-md transition-colors duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-16 ${spaceMono.className}`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-bold text-teal-300">
              <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mr-2" />
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">About</Link>
            <Link href="/testimonials" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">Testimonials</Link>
            <Link href="/contacts" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
