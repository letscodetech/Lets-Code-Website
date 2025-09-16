'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Define menu items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Contact', href: '/contacts' },
    { name: 'Classes', href: '/classes' } // Changed from "Learn with LetsCode" to "Courses"
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-black/30 backdrop-blur-md'
        } rounded-full px-4 md:px-6 py-3 border border-white/10 shadow-lg`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex justify-between items-center ${spaceMono.className}`}>
          {/* Left spacer for centering */}
          <div className="flex-1"></div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
              </motion.div>
            </Link>
          </div>

          {/* Right side with menu items */}
          <div className="flex-1 flex justify-end">
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1 items-center">
              {menuItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="tel:+254714573892"
                className="ml-2 px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full text-sm font-medium flex items-center shadow-lg hover:shadow-teal-500/30 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-3 h-3 mr-1.5" />
                Call Us
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 bg-black/80 backdrop-blur-lg rounded-2xl border border-white/10 p-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <motion.div key={item.name} whileHover={{ x: 5 }}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="tel:+254714573892"
                className="mt-4 px-4 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl text-sm font-medium flex items-center justify-center shadow-lg whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={closeMobileMenu}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;