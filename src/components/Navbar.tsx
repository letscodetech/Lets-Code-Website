'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { spaceMono } from '../styling/font';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Courses', href: '/classes' },
    { name: 'Contact', href: '/contacts' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm h-24"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className={`flex items-center justify-between h-full ${spaceMono.className}`}>

            {/* LOGO (BIG BOOST HERE) */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0"
              onClick={closeMobileMenu}
            >
              <img
                src="/images/logo.png"
                alt="LetsCode"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">

              {menuItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="tel:+254714573892"
                className="px-6 py-2 bg-teal-600 text-white rounded-full text-base font-medium flex items-center gap-2 shadow hover:bg-teal-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call Us
              </motion.a>
            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-md">
          <div className="px-6 py-4 flex flex-col gap-4">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-lg font-medium text-gray-700 hover:text-black py-2"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:+254714573892"
              onClick={closeMobileMenu}
              className="mt-2 px-4 py-3 bg-teal-600 text-white rounded-lg flex items-center justify-center gap-2 text-base"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;