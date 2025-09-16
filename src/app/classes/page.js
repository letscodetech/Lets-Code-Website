'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen, Search, X, CreditCard, Check } from 'lucide-react';
import { Space_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Head from 'next/head';

// Initialize Space Mono font from Google Fonts
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  
  // Mock data for recorded classes - replace with your actual data
  const recordedClasses = [
    {
      id: 1,
      course: "Fullstack Web Development",
      title: "Introduction to HTML & CSS",
      description: "Learn the fundamentals of HTML and CSS to build your first web page.",
      duration: "45:30",
      date: "2025-10-15",
      thumbnail: "/thumbnails/html-css.jpg",
      videoUrl: "/recordings/fullstack/1-intro-html-css.mp4",
      category: "web"
    },
    {
      id: 2,
      course: "Fullstack Web Development",
      title: "JavaScript Basics",
      description: "Understanding variables, functions, and control structures in JavaScript.",
      duration: "52:15",
      date: "2025-10-22",
      thumbnail: "/thumbnails/javascript.jpg",
      videoUrl: "/recordings/fullstack/2-javascript-basics.mp4",
      category: "web"
    },
    {
      id: 3,
      course: "Backend Development (Python/Django)",
      title: "Python Fundamentals",
      description: "Getting started with Python programming language.",
      duration: "48:20",
      date: "2025-10-18",
      thumbnail: "/thumbnails/python.jpg",
      videoUrl: "/recordings/backend/1-python-fundamentals.mp4",
      category: "backend"
    },
    {
      id: 4,
      course: "Artificial Intelligence (AI & ML)",
      title: "Introduction to Machine Learning",
      description: "Understanding the basics of machine learning and its applications.",
      duration: "55:40",
      date: "2025-10-20",
      thumbnail: "/thumbnails/ml-intro.jpg",
      videoUrl: "/recordings/ai/1-ml-intro.mp4",
      category: "ai"
    },
    {
      id: 5,
      course: "Mobile App Development (Flutter/React Native)",
      title: "Flutter Installation and Setup",
      description: "Setting up your development environment for Flutter.",
      duration: "32:15",
      date: "2025-10-17",
      thumbnail: "/thumbnails/flutter-setup.jpg",
      videoUrl: "/recordings/mobile/1-flutter-setup.mp4",
      category: "mobile"
    },
    {
      id: 6,
      course: "Data Science & Analytics",
      title: "Python for Data Science",
      description: "Using Python libraries like Pandas and NumPy for data analysis.",
      duration: "50:30",
      date: "2025-10-19",
      thumbnail: "/thumbnails/data-science.jpg",
      videoUrl: "/recordings/data/1-python-data-science.mp4",
      category: "data"
    }
  ];

  const filteredClasses = recordedClasses.filter(recording => {
    const matchesSearch = recording.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         recording.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'all' || recording.category === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const handleWatchClick = (e) => {
    e.preventDefault();
    setShowSubscribeModal(true);
  };

  const closeModal = () => {
    setShowSubscribeModal(false);
  };

  return (
    <>
      <Head>
        <title>LetsCode | Classes</title>
        <meta name="description" content="Access all recorded classes from our tech courses." />
        <meta name="keywords" content="recorded classes, tech tutorials, coding videos" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Header */}
        <header className="pt-32 pb-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`${spaceMono.className} text-5xl md:text-6xl font-bold mb-6`}>
                <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Classes
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Access all your course recordings in one place. Learn at your own pace, anytime, anywhere.
              </p>
              
              {/* Pricing Models */}
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
                <h2 className="text-2xl font-bold mb-6">Flexible Pricing Models</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-xl p-6 border border-teal-500/30"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-8 h-8 text-teal-400 mr-3" />
                      <h3 className="text-xl font-bold">Live Classes</h3>
                    </div>
                    <div className="text-3xl font-bold mb-2">KES 5,000<span className="text-lg text-gray-400">/month</span></div>
                    <p className="text-gray-300 mb-4">Interactive sessions with instructors and peers</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                        <span>Real-time Q&A with instructors</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                        <span>Group projects and collaboration</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                        <span>Access to class recordings</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-500/30"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <Play className="w-8 h-8 text-purple-400 mr-3" />
                      <h3 className="text-xl font-bold">Recorded Classes</h3>
                    </div>
                    <div className="text-3xl font-bold mb-2">KES 2,500<span className="text-lg text-gray-400">/month</span></div>
                    <p className="text-gray-300 mb-4">Learn at your own pace with recorded content</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        <span>Access to all recorded lessons</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        <span>Self-paced learning schedule</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        <span>Community support forums</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search classes..."
                    className="w-full bg-black/30 backdrop-blur-lg border border-white/10 rounded-full py-4 px-6 pl-14 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              
              {/* Course Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <motion.button
                  onClick={() => setSelectedCourse('all')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCourse === 'all'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white'
                      : 'bg-black/30 backdrop-blur-lg border border-white/10 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  All Classes
                </motion.button>
                <motion.button
                  onClick={() => setSelectedCourse('web')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCourse === 'web'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white'
                      : 'bg-black/30 backdrop-blur-lg border border-white/10 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Web Development
                </motion.button>
                <motion.button
                  onClick={() => setSelectedCourse('backend')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCourse === 'backend'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white'
                      : 'bg-black/30 backdrop-blur-lg border border-white/10 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Backend
                </motion.button>
                <motion.button
                  onClick={() => setSelectedCourse('ai')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCourse === 'ai'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white'
                      : 'bg-black/30 backdrop-blur-lg border border-white/10 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  AI & ML
                </motion.button>
                <motion.button
                  onClick={() => setSelectedCourse('mobile')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCourse === 'mobile'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white'
                      : 'bg-black/30 backdrop-blur-lg border border-white/10 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mobile Development
                </motion.button>
                <motion.button
                  onClick={() => setSelectedCourse('data')}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCourse === 'data'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white'
                      : 'bg-black/30 backdrop-blur-lg border border-white/10 text-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Data Science
                </motion.button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Classes Grid */}
        <section className="py-12 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {filteredClasses.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No classes found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClasses.map((recording) => (
                  <motion.div
                    key={recording.id}
                    className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * recording.id }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.div
                          className="w-16 h-16 rounded-full bg-teal-500/80 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-sm z-10">
                        {recording.duration}
                      </div>
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-xs z-10">
                        {recording.course}
                      </div>
                      <div 
                        className="w-full h-full bg-gray-700"
                        style={{ backgroundImage: `url(${recording.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      ></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{recording.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{recording.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-gray-500 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {recording.date}
                        </div>
                        <motion.button
                          onClick={handleWatchClick}
                          className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Watch
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
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
                  Start Learning <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Today</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Get unlimited access to all our classes with our monthly subscription plan.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="/contacts"
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe Now - KES 2,500/month
                  </motion.a>
                  <motion.a
                    href="tel:+254714573892"
                    className="px-8 py-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Need Help?
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 max-w-2xl w-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className={`${spaceMono.className} text-3xl font-bold`}>
                  Subscribe to <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Watch Classes</span>
                </h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-gray-300 mb-8">
                Choose a subscription plan to get unlimited access to all our recorded classes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-500/30"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <Play className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold">Recorded Classes</h3>
                  </div>
                  <div className="text-3xl font-bold mb-4">KES 2,500<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to all recorded lessons</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Self-paced learning schedule</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Community support forums</span>
                    </li>
                  </ul>
                  <motion.a
                    href="/contacts"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-medium flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-br from-teal-900/30 to-emerald-900/30 rounded-xl p-6 border border-teal-500/30"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-8 h-8 text-teal-400 mr-3" />
                    <h3 className="text-xl font-bold">Live Classes</h3>
                  </div>
                  <div className="text-3xl font-bold mb-4">KES 5,000<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Real-time Q&A with instructors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Group projects and collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to class recordings</span>
                    </li>
                  </ul>
                  <motion.a
                    href="/contacts"
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg font-medium flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </motion.a>
                </motion.div>
              </div>
              
              <div className="text-center text-gray-400 text-sm">
                Already have a subscription? <a href="#" className="text-teal-400 hover:underline">Log in here</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}