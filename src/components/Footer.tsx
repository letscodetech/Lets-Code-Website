"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Footer background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center group">
                <Image 
                  src="/images/Logo White.png" 
                  alt="Logo" 
                  width={120} 
                  height={60}
                  className="h-12 w-auto mr-3 transition-transform duration-300 group-hover:scale-105" 
                />
                
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Kenya's tech education and software partner. Tech courses for individuals, career days for schools, corporate training for companies, and custom software development for businesses, all under one roof.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' },
                { name: 'Courses', href: '/classes' },
                { name: 'Contact', href: '/contacts' }
              ].map((link, index) => (
                <li key={link.name} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-teal-400 rounded-full mr-2 transition-all duration-300 group-hover:w-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+254714573892" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                    +254 714 573 892
                  </a>
                </div>
              </li>
              
              <li className="flex items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:info@letscodeltd.com" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
                    info@letscodeltd.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-300">Thika, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LetsCode. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;