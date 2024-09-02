import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="left-section mb-6 md:mb-0">
          <a className="logo" href="/">
          <img src="/images/Logo White.png" alt="Logo" className="h-13 w-auto mr-2" />

          </a>
         
        </div>
        <div className="right-section flex flex-col md:flex-row justify-between">
          <div className="lists flex flex-col md:flex-row">
            <ul className="mb-6 md:mb-0">
              <li><h2 className="font-semibold text-lg">Company</h2></li>
              <li><Link href="/" className="text-blue-500 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-blue-500 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/testimonials" className="text-blue-500 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contacts" className="text-blue-500 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          
           
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
