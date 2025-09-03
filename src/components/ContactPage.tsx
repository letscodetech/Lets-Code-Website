'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import Footer from '@/components/Footer';
import Head from 'next/head';

const ContactPage: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    emailjs.sendForm('service_bkg03iq', 'template_mfqw4lq', form, '0ZE_zARFVYzE-vqYY')
      .then((result) => {
        // Handle success
        console.log('Success:', result.text);
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error.text);
        alert('Error sending message. Please try again.');
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us | LetsCode</title>
        <meta name="description" content="Contact LetsCode for inquiries about our programs and services." />
        <meta name="keywords" content="contact letscode, tech education, software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
        {/* Floating animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 backdrop-blur-sm"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          
          {/* Tech grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        </div>

        {/* Hero Section */}
        <header className="relative pt-32 pb-20 px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Contact
              </span>{" "}
              <span className="text-white">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Have questions or ready to start your tech journey? Reach out to us today.
            </p>
          </motion.div>
        </header>

        {/* Contact Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full mb-4">
                    <Mail className="w-5 h-5 text-teal-400 mr-2" />
                    <span className="text-teal-400 font-medium">Send a Message</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      Get In Touch
                    </span>
                  </h2>
                  <p className="text-gray-400">
                    If you have any questions or concerns, please feel free to reach out to us. We respond to every call and email.
                  </p>
                </div>

                <form
                  id="contact"
                  name="Contact Form"
                  onSubmit={sendEmail}
                  className="space-y-6"
                >
                  <div className="input-group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      aria-label="name"
                      className="bg-black/50 border border-teal-500/30 rounded-lg p-3 w-full text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                      required
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      aria-label="email"
                      className="bg-black/50 border border-teal-500/30 rounded-lg p-3 w-full text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                      required
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      aria-label="write your message"
                      name="message"
                      placeholder="Tell us about what you need help with"
                      className="bg-black/50 border border-teal-500/30 rounded-lg p-3 w-full h-32 text-white focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <motion.button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center shadow-lg hover:shadow-teal-500/30 transition-all"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Contact Card 1 */}
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Call Us</h3>
                      <p className="text-gray-400 mb-3">Have questions? Give us a call.</p>
                      <a href="tel:+254714573892" className="text-teal-400 hover:text-teal-300 transition-colors">
                        +254 714573892
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Card 2 */}
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Email Us</h3>
                      <p className="text-gray-400 mb-3">Send us an email anytime.</p>
                      <a href="mailto:info@lets-code.tech" className="text-teal-400 hover:text-teal-300 transition-colors">
                        letsscodeinc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Card 3 */}
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                      <p className="text-gray-400 mb-3">Come visit our office.</p>
                      <address className="text-teal-400 not-italic">
                        Thika, Kenya
                      </address>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 h-64 flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                    <p className="text-gray-400">Interactive map coming soon</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

       
      </div>
    </>
  );
};

export default ContactPage;