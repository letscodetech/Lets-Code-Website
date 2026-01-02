"use client";
import { PhoneIcon, Users, TrendingUp, Package, Star, Quote, GraduationCap, Zap, Code, Briefcase } from "lucide-react";
import { spaceMono } from "../styling/font";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStudentsCount(100);
      setSuccessRate(95);
      setProductsCount(15);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
<Head>
  <title>LetsCode Ltd | Coding for Kids, Teens & Adults | Learn Programming Online</title>
  <meta name="description" content="LetsCode Ltd offers virtual coding classes, tech bootcamps, and custom software solutions. Learn programming languages, app development, game development, AI, data science, and more. Empower kids, teens, and adults to code and innovate with expert mentors." />
  <meta name="keywords" content="LetsCode, LetsCode Ltd, coding, programming, coding for kids, learn to code, online coding classes, programming languages, Python, JavaScript, Java, C++, HTML, CSS, React, Next.js, AI, machine learning, data science, app development, game development, tech bootcamp, virtual coding classes, software development, tech education, programming for beginners, STEM education, coding for teens, coding for adults" />
  <meta name="author" content="LetsCode Ltd" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content="LetsCode Ltd | Coding for Kids, Teens & Adults | Learn Programming Online" />
  <meta property="og:description" content="Join LetsCode Ltd for expert-led online coding classes, bootcamps, and custom tech solutions. Learn programming, AI, data science, game development, and app development from anywhere in the world." />
  <meta property="og:image" content="/path-to-image.jpg" />
  <meta property="og:url" content="https://www.letcodeltd.com/" />
  <meta property="og:type" content="website" />
  <meta name="tiktok:username" content="@letscode_" />
  <meta name="tiktok:company" content="LetsCode Ltd" />
  <meta name="instagram:username" content="@letscodetech" />
  <meta name="instagram:company" content="LetsCode Ltd" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="topic" content="Coding, Programming, Technology Education, Online Learning, Software Development" />
  <meta name="coverage" content="Worldwide" />
  <meta name="rating" content="General" />
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
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        </div>

        {/* Hero Section */}
        <header className="relative pt-32 pb-20 px-4 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className={`${spaceMono.className} text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight`}>
              <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Democratizing</span>{" "}
              <span className="text-white">Tech Education</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Igniting the spark of innovation in every aspiring coder through accessible, high-quality tech education.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <motion.a href="#programs" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>Explore Programs</motion.a>
              <motion.div className="px-8 py-3 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium flex items-center justify-center gap-2" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <PhoneIcon className="w-5 h-5 text-teal-400" />
                <a href="tel:+254714573892" className="text-white">+254 714573892</a>
              </motion.div>
            </div>
          </motion.div>
        </header>

        {/* Stats Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.5)" }}>
                <div className="flex justify-center mb-4"><div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center"><Users className="w-8 h-8 text-teal-400" /></div></div>
                <h3 className="text-4xl font-bold mb-2">{studentsCount.toLocaleString()}+</h3><p className="text-gray-400">Students Taught</p>
              </motion.div>
              <motion.div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.5)" }}>
                <div className="flex justify-center mb-4"><div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center"><TrendingUp className="w-8 h-8 text-teal-400" /></div></div>
                <h3 className="text-4xl font-bold mb-2">{successRate}%</h3><p className="text-gray-400">Success Rate</p>
              </motion.div>
              <motion.div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.5)" }}>
                <div className="flex justify-center mb-4"><div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center"><Package className="w-8 h-8 text-teal-400" /></div></div>
                <h3 className="text-4xl font-bold mb-2">{productsCount}+</h3><p className="text-gray-400">Products Created</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>Our <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Programs</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive tech education programs designed to transform beginners into industry-ready professionals.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative" whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div><div className="relative z-10"><div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6"><GraduationCap className="w-7 h-7 text-teal-400" /></div><h3 className="text-2xl font-bold mb-4">School Training</h3><p className="text-gray-400 mb-6">A transformative one-year crash course breaking financial barriers to make quality coding education accessible for all.</p></div></motion.div>
              <motion.div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative" whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div><div className="relative z-10"><div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6"><Zap className="w-7 h-7 text-teal-400" /></div><h3 className="text-2xl font-bold mb-4">Bootcamps</h3><p className="text-gray-400 mb-6">Intensive, short-term programs designed to fast-track your coding skills with hands-on learning experiences.</p></div></motion.div>
              <motion.div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative" whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div><div className="relative z-10"><div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6"><Code className="w-7 h-7 text-teal-400" /></div><h3 className="text-2xl font-bold mb-4">Tech Products</h3><p className="text-gray-400 mb-6">Tailored software solutions for individuals and businesses, crafted by our expert team to meet your unique needs.</p></div></motion.div>
              <motion.div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative" whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div><div className="relative z-10"><div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6"><Briefcase className="w-7 h-7 text-teal-400" /></div><h3 className="text-2xl font-bold mb-4">Consultancy</h3><p className="text-gray-400 mb-6">Expert tech consulting services to help businesses optimize their digital strategy, implement new technologies, and solve complex technical challenges.</p></div></motion.div>
              <motion.div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative" whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div><div className="relative z-10"><div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6"><Star className="w-7 h-7 text-teal-400" /></div><h3 className="text-2xl font-bold mb-4">Digital Literacy</h3><p className="text-gray-400 mb-6">Essential digital skills for all ages. Learn computer fundamentals, internet safety, digital citizenship, and practical tools for modern life and work.</p></div></motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>Success <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Stories</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Hear from our students who transformed their careers through our programs.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -10 }}>
                <div className="flex items-center mb-6"><div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">JD</div><div className="ml-4"><h4 className="font-bold">Dennis Maina</h4><p className="text-gray-400 text-sm">Software Engineer</p></div><div className="ml-auto text-teal-400"><Quote className="w-8 h-8" /></div></div>
                <p className="text-gray-300 italic">"The LetsCode bootcamp transformed my career in just 12 weeks. The hands-on projects and mentorship prepared me for real-world challenges. I landed my dream job immediately after graduation!"</p>
              </motion.div>
              <motion.div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ y: -10 }}>
                <div className="flex items-center mb-6"><div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">AS</div><div className="ml-4"><h4 className="font-bold">Brandon Onyango</h4><p className="text-gray-400 text-sm">Entrepreneur</p></div><div className="ml-auto text-teal-400"><Quote className="w-8 h-8" /></div></div>
                <p className="text-gray-300 italic">"The custom software solution delivered by LetsCode exceeded our expectations. Their team understood our unique needs and created a product that has become essential to our business operations."</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* ===== NEW SECTION: OUR CLIENTS (WITH RECREATED LOGOS) ============ */}
        {/* =================================================================== */}
              {/* =================================================================== */}
        {/* ===== CORRECTED SECTION: OUR CLIENTS ============================ */}
        {/* =================================================================== */}
        <section id="clients" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Our <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Clients</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Proud to have partnered with these amazing organizations to bring their digital visions to life.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
              {/* Logo 1: Kereu & Co. Advocates */}
              <motion.a
                href="https://www.kereulaw.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="h-10 w-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" viewBox="0 0 250 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="28" fontFamily="Georgia, serif" fontSize="22" fill="white" fontWeight="bold">Kereu & Co. Advocates</text>
                </svg>
              </motion.a>

              {/* Logo 2: MwalimuAI */}
              <motion.a
                href="https://mwalimu-ai-plum.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="h-10 w-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                    <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fill="white" fontWeight="normal">Mwalimu AI</text>
                </svg>
              </motion.a>

              {/* Logo 3: FirmEase */}
              <motion.a
                href="https://law-firm-cms-git-main-letscodes-projects-fbef3206.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                 <svg className="h-10 w-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fill="white" fontWeight="bold">FirmEase</text>
                </svg>
              </motion.a>

              {/* Logo 4: PROPCO */}
              <motion.a
                href="https://counsellin-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                 <svg className="h-10 w-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fill="#17D4A7" fontWeight="bold">PROPCO</text>
                </svg>
              </motion.a>

            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10 overflow-hidden relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className={`${spaceMono.className} text-4xl font-bold mb-6`}>Ready to <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Transform</span> Your Future?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join our community of learners and start your journey into tech today.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a href="/contacts" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>Apply Now</motion.a>
                  <motion.a href="tel:+254714573892" className="px-8 py-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium flex items-center justify-center gap-2" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                    <PhoneIcon className="w-5 h-5 text-teal-400" /> Speak to an Advisor
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}