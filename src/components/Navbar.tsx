'use client'; // Ensure this directive is present for Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { spaceMono } from '../styling/font'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu function
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white text-black z-50 shadow-md transition-colors duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-16 ${spaceMono.className}`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-2xl font-bold text-teal-300">
              <img src="/images/logo.png" alt="Logo" className="h-12 w-auto mr-2" />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Hamburger Menu Icon */}
            <button onClick={toggleMobileMenu} className="text-teal-300 hover:text-teal-500 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 items-center">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">About</Link>
            <Link href="/testimonials" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">Testimonials</Link>
            <Link href="/contacts" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col items-start space-y-1 px-4 pt-2 pb-3">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 hover:text-white transition-colors" onClick={closeMobileMenu}>Home</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 hover:text-white transition-colors" onClick={closeMobileMenu}>About</Link>
              <Link href="/testimonials" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 hover:text-white transition-colors" onClick={closeMobileMenu}>Testimonials</Link>
              <Link href="/contacts" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 hover:text-white transition-colors" onClick={closeMobileMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
