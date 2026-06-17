'use client';
import { motion } from 'framer-motion';
import { Space_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Head from 'next/head';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const WHATSAPP_NUMBER = '254714573892';

const courses = [
  {
    id: 'fullstack',
    name: 'Fullstack Web Development',
    description:
      'From your first HTML tag to production-ready Next.js apps. Build real, full-stack products on the web.',
    modules: ['HTML & CSS', 'JavaScript', 'React', 'Next.js', 'APIs & Databases'],
    level: 'Beginner → Advanced',
    recordedPrice: 3000,
    livePrice: 5000,
    waMessage: `Hi, I'd like to enrol in the Fullstack Web Development course. Please send me payment and enrolment details.`,
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    description:
      'Build intelligent systems and automate real-world workflows using Python and modern AI libraries.',
    modules: ['Python Fundamentals', 'NumPy & Pandas', 'Machine Learning',  'Automation & Scripting'],
    level: 'Intermediate',
    recordedPrice: 3000,
    livePrice: 5000,
    waMessage: `Hi, I'd like to enrol in the AI & Automation course. Please send me payment and enrolment details.`,
  },
];

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.83L.057 23.5l5.834-1.531A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.374l-.36-.213-3.724.977.993-3.623-.235-.373A9.794 9.794 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
    </svg>
  );
}

export default function ClassesPage() {
  return (
    <>
      <Head>
        <title>LetsCode | Course Hub</title>
        <meta name="description" content="Browse and enrol in our tech courses." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <header className="pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`${spaceMono.className} text-5xl md:text-6xl font-bold mb-6`}>
                <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Course Hub
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
                Two focused tracks. Real skills. Enrol via WhatsApp and start learning this week.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course, i) => (
                  <motion.div
                    key={course.id}
                    className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 * i }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Card header */}
                    <div className="bg-black/40 px-6 py-5 border-b border-white/10">
                      <span className="text-xs font-medium text-teal-400 uppercase tracking-widest">
                        {course.level}
                      </span>
                      <h2 className="text-xl font-bold mt-1 mb-1">{course.name}</h2>
                      <p className="text-sm text-gray-400">{course.description}</p>
                    </div>

                    {/* Modules */}
                    <div className="px-6 py-4 border-b border-white/10">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">
                        What you'll learn
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.modules.map((mod) => (
                          <span
                            key={mod}
                            className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-300"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="px-6 py-4 grid grid-cols-2 gap-3 border-b border-white/10">
                      <div className="bg-white/5 rounded-xl p-3">
                        <p className="text-xs text-gray-500 mb-1">Recorded</p>
                        <p className="text-lg font-bold">
                          KES {course.recordedPrice.toLocaleString()}
                          <span className="text-xs text-gray-400 font-normal"> one-time</span>
                        </p>
                      </div>
                      <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-3">
                        <p className="text-xs text-teal-400 mb-1">Live classes</p>
                        <p className="text-lg font-bold">
                          KES {course.livePrice.toLocaleString()}
                          <span className="text-xs text-gray-400 font-normal">/mo</span>
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="px-6 py-4">
                      <motion.a
                        href={buildWhatsAppUrl(course.waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl font-medium text-sm transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <WhatsAppIcon size={18} />
                        Enrol via WhatsApp
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </header>

        <Footer />
      </div>
    </>
  );
}