"use client";
import { PhoneIcon, Users, TrendingUp, Package, Star, Quote, GraduationCap, Zap, Code, Briefcase } from "lucide-react"; // Added Briefcase icon
import { spaceMono } from "../styling/font";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion } from "framer-motion"; // For animations
import { useState, useEffect } from "react";

export default function HomePage() {
  // State for animated counters
  const [studentsCount, setStudentsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  // Animate counters when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setStudentsCount(100); // Updated to 100 students
      setSuccessRate(95);    // Updated to 95% success rate
      setProductsCount(15);  // Updated to 15 products
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>LetsCode | Democratizing Tech Education</title>
        <meta name="description" content="LetsCode is a tech startup aimed at democratizing tech education and innovation. Join us for bootcamps, school training, and tailored tech products." />
        <meta name="keywords" content="tech education, coding bootcamp, tech products, school training" />
        <meta name="author" content="LetsCode, letsCode, Lets Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LetsCode | Democratizing Tech Education" />
        <meta property="og:description" content="We provide inclusive tech education and innovation through bootcamps, school training, and custom tech products." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://www.lets-code.tech/" />
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
            <h1 className={`${spaceMono.className} text-5xl md:text-7xl font-bold mb-6`}>
<span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">                              Democratizing
              </span>{" "}
              <span className="text-white">Tech Education</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Igniting the spark of innovation in every aspiring coder through accessible, high-quality tech education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <motion.a
                href="#programs" // Changed to scroll to programs section
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
              </motion.a>
              <motion.div
                className="px-8 py-3 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon className="w-5 h-5 text-teal-400" />
                <a href="tel:+254714573892" className="text-white">
                  +254 714573892
                </a>
              </motion.div>
            </div>
          </motion.div>
        </header>

        {/* Stats Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Students Stat */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.5)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  {studentsCount.toLocaleString()}+
                </h3>
                <p className="text-gray-400">Students Taught</p>
              </motion.div>

              {/* Success Rate Stat */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.5)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  {successRate}%
                </h3>
                <p className="text-gray-400">Success Rate</p>
              </motion.div>

              {/* Products Stat */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.5)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Package className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  {productsCount}+
                </h3>
                <p className="text-gray-400">Products Created</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Our <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Programs</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive tech education programs designed to transform beginners into industry-ready professionals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* School Training Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative"
                whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                    <GraduationCap className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">School Training</h3>
                  <p className="text-gray-400 mb-6">
                    A transformative one-year crash course breaking financial barriers to make quality coding education accessible for all.
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-teal-400 font-medium"
                    whileHover={{ x: 5 }}
                  >

                  </motion.a>
                </div>
              </motion.div>

              {/* Bootcamps Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative"
                whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Bootcamps</h3>
                  <p className="text-gray-400 mb-6">
                    Intensive, short-term programs designed to fast-track your coding skills with hands-on learning experiences.
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-teal-400 font-medium"
                    whileHover={{ x: 5 }}
                  >

                  </motion.a>
                </div>
              </motion.div>

              {/* Tech Products Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative"
                whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                    <Code className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tech Products</h3>
                  <p className="text-gray-400 mb-6">
                    Tailored software solutions for individuals and businesses, crafted by our expert team to meet your unique needs.
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-teal-400 font-medium"
                    whileHover={{ x: 5 }}
                  >
                  </motion.a>
                </div>
              </motion.div>

              {/* Consultancy Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-hidden relative"
                whileHover={{ y: -15, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                    <Briefcase className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Consultancy</h3>
                  <p className="text-gray-400 mb-6">
                    Expert tech consulting services to help businesses optimize their digital strategy, implement new technologies, and solve complex technical challenges.
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-teal-400 font-medium"
                    whileHover={{ x: 5 }}
                  >

                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Course <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Details</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our specialized courses designed to meet your specific learning goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Mobile App Development Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-teal-400 font-medium mb-2">3 Months</div>
                <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
                <p className="text-gray-400 text-sm">
                  Learn to build applications for both Android and iOS platforms with cross-platform development tools.
                </p>
              </motion.div>

              {/* Game Development Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-teal-400 font-medium mb-2">3 Months</div>
                <h3 className="text-xl font-bold mb-3">Game Development</h3>
                <p className="text-gray-400 text-sm">
                  Dive into game creation with industry-standard tools and learn game design principles and mechanics.
                </p>
              </motion.div>

              {/* Full Stack Development Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-teal-400 font-medium mb-2">5 Months</div>
                <h3 className="text-xl font-bold mb-3">Full Stack Development</h3>
                <p className="text-gray-400 text-sm">
                  Master frontend and backend technologies including HTML/CSS, JavaScript, React, Next.js, and databases.
                </p>
              </motion.div>

              {/* AI Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-teal-400 font-medium mb-2">3 Months</div>
                <h3 className="text-xl font-bold mb-3">Artificial Intelligence</h3>
                <p className="text-gray-400 text-sm">
                  Explore machine learning, neural networks, and learn to build intelligent applications with AI technologies.
                </p>
              </motion.div>

              {/* Data Science Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-teal-400 font-medium mb-2">4 Months</div>
                <h3 className="text-xl font-bold mb-3">Data Science</h3>
                <p className="text-gray-400 text-sm">
                  Master data analysis, visualization, and statistical modeling to extract insights from complex datasets.
                </p>
              </motion.div>

              {/* Machine Learning Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-teal-400 font-medium mb-2">4 Months</div>
                <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
                <p className="text-gray-400 text-sm">
                  Dive deep into algorithms, predictive modeling, and pattern recognition to build intelligent systems.
                </p>
              </motion.div>

              {/* QA Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-teal-400 font-medium mb-2">2 Months</div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-gray-400 text-sm">
                  Learn testing methodologies, automation tools, and best practices to ensure software quality and reliability.
                </p>
              </motion.div>

              {/* Cyber Security Card */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                whileHover={{ y: -10, borderColor: "rgba(20, 184, 166, 0.3)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-teal-400 font-medium mb-2">4 Months</div>
                <h3 className="text-xl font-bold mb-3">Cyber Security</h3>
                <p className="text-gray-400 text-sm">
                  Master the techniques to protect systems, networks, and data from digital attacks and security breaches.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Success <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Hear from our students who transformed their careers through our programs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Dennis Maina</h4>
                    <p className="text-gray-400 text-sm">Software Engineer</p>
                  </div>
                  <div className="ml-auto text-teal-400">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The LetsCode bootcamp transformed my career in just 12 weeks. The hands-on projects and mentorship prepared me for real-world challenges. I landed my dream job immediately after graduation!"
                </p>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Brandon Onyango</h4>
                    <p className="text-gray-400 text-sm">Entrepreneur</p>
                  </div>
                  <div className="ml-auto text-teal-400">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The custom software solution delivered by LetsCode exceeded our expectations. Their team understood our unique needs and created a product that has become essential to our business operations."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className={`${spaceMono.className} text-4xl font-bold mb-6`}>
                  Ready to <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Transform</span> Your Future?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Join our community of learners and start your journey into tech today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="/contacts"
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.a>
                  <motion.a
                    href="tel:+254714573892"
                    className="px-8 py-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PhoneIcon className="w-5 h-5 text-teal-400" />
                    Speak to an Advisor
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}