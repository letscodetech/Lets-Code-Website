"use client";
import {
  PhoneIcon,
  Users,
  TrendingUp,
  Building2,
  Star,
  Quote,
  GraduationCap,
  Code2,
  Briefcase,
  MonitorSmartphone,
  School,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { spaceMono } from "../styling/font";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP = "254714573892";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.83L.057 23.5l5.834-1.531A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.374l-.36-.213-3.724.977.993-3.623-.235-.373A9.794 9.794 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
    </svg>
  );
}

const services = [
  {
    icon: Code2,
    eyebrow: "For Individuals",
    title: "Tech Courses",
    description:
      "Fullstack Web Development and AI & Automation — structured, practical courses you can take recorded or live with an instructor.",
    features: [
      "Fullstack Web Dev",
      "AI & Automation",
      "Live & recorded options",
      "Certificate on completion",
    ],
    cta: "Browse Courses",
    href: "/classes",
    wa: null,
    accent: "teal",
  },
  {
    icon: School,
    eyebrow: "For Schools",
    title: "Career Days & School Training",
    description:
      "We come to your school. Tech career days, coding workshops, and digital literacy sessions that show students what's possible in tech — delivered by working professionals.",
    features: [
      "Career day facilitation",
      "Student coding workshops",
      "Digital literacy sessions",
      "Customised for your school",
    ],
    cta: "Book Your School",
    href: null,
    wa: `Hi, I'd like to book LetsCode for a school career day or training session. Please send me details.`,
    accent: "emerald",
  },
  {
    icon: Building2,
    eyebrow: "For Companies",
    title: "B2B Tech Training",
    description:
      "Upskill your team in the technologies that matter. From Python automation to AI tools integration — we train your staff on-site or online, tailored to your business.",
    features: [
      "On-site or online delivery",
      "Custom curriculum",
      "Python & AI tools",
      "Team assessments included",
    ],
    cta: "Get a Quote",
    href: null,
    wa: `Hi, I'm interested in B2B tech training for my company. Can you send me a quote and more details?`,
    accent: "teal",
  },
  {
    icon: MonitorSmartphone,
    eyebrow: "For Businesses",
    title: "Software Development",
    description:
      "We build web apps, internal tools, management systems, and custom software for businesses across Kenya. Reliable, modern, and built to grow with you.",
    features: [
      "Web & mobile apps",
      "Business management systems",
      "API integrations",
      "Ongoing support",
    ],
    cta: "Discuss Your Project",
    href: null,
    wa: `Hi, I'd like to discuss a software development project with LetsCode. Please reach out.`,
    accent: "emerald",
  },
];

const stats = [
  { icon: Users, value: "100+", label: "Students Trained" },
  { icon: School, value: "5+", label: "Schools Visited" },
  { icon: Building2, value: "10+", label: "Businesses Served" },
  { icon: TrendingUp, value: "95%", label: "Completion Rate" },
];

const testimonials = [
  {
    initials: "DM",
    name: "Dennis Maina",
    role: "Software Engineer",
    quote:
      "The LetsCode bootcamp transformed my career in 12 weeks. Hands-on projects and real mentorship got me job-ready faster than I thought possible.",
  },
  {
    initials: "BO",
    name: "Brandon Onyango",
    role: "Entrepreneur",
    quote:
      "The software LetsCode built for our business exceeded every expectation. They understood exactly what we needed and delivered something we rely on every day.",
  },
];

const clients = [
  {
    name: "Kereu & Co. Advocates",
    href: "https://www.kereulaw.co.ke/",
    font: "Georgia, serif",
    weight: "bold",
    color: "white",
    viewBox: "0 0 260 40",
  },
  {
    name: "Mwalimu AI",
    href: "https://mwalimu-ai-plum.vercel.app/",
    font: "Arial, sans-serif",
    weight: "normal",
    color: "white",
    viewBox: "0 0 150 40",
  },
  {
    name: "FirmEase",
    href: "https://law-firm-cms-git-main-letscodes-projects-fbef3206.vercel.app/",
    font: "Arial, sans-serif",
    weight: "bold",
    color: "white",
    viewBox: "0 0 120 40",
  },
  {
    name: "PROPCO",
    href: "https://counsellin-website.vercel.app/",
    font: "Arial, sans-serif",
    weight: "bold",
    color: "#17D4A7",
    viewBox: "0 0 110 40",
  },
];
type Accent = "teal" | "emerald";
const accentClasses: Record<
  Accent,
  {
    border: string;
    icon: string;
    iconColor: string;
    dot: string;
    btn: string;
    eyebrow: string;
  }
> = {
  teal: {
    border: "",
    icon: "",
    iconColor: "",
    dot: "",
    btn: "",
    eyebrow: "",
  },
  emerald: {
    border: "",
    icon: "",
    iconColor: "",
    dot: "",
    btn: "",
    eyebrow: "",
  },
};
type Service = {
  icon: any;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string | null;
  wa: string | null;
  accent: Accent;
};

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>
          LetsCode Ltd | Tech Courses, School Training & Software Development in
          Kenya
        </title>
        <meta
          name="description"
          content="LetsCode Ltd offers tech courses, school career days, B2B corporate training, and custom software development across Kenya. Kenya's leading tech education and software partner."
        />
        <meta
          name="keywords"
          content="LetsCode, tech training Kenya, coding courses Nairobi, B2B tech training, school career day Kenya, software development Kenya, Python, JavaScript, AI, fullstack, web development"
        />
        <meta name="author" content="LetsCode Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="LetsCode Ltd | Tech Courses, School Training & Software in Kenya"
        />
        <meta
          property="og:description"
          content="Courses for individuals, career days for schools, training for companies, and software for businesses. LetsCode is Kenya's all-in-one tech partner."
        />
        <meta property="og:url" content="https://www.letcodeltd.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted &&
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-teal-500/8 to-emerald-500/8"
                style={{
                  width: `${80 + i * 20}px`,
                  height: `${80 + i * 20}px`,
                  top: `${10 + i * 15}%`,
                  left: `${5 + i * 17}%`,
                }}
                animate={{ x: [0, 40 - i * 8], y: [0, 30 - i * 5] }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
        </div>

        {/* ── Hero ── */}
        <header className="relative pt-32 pb-20 px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-medium tracking-widest text-teal-400 uppercase mb-4 px-3 py-1 border border-teal-500/30 rounded-full bg-teal-500/10">
              Kenya's Tech Training & Software Partner
            </span>
            <h1
              className={`${spaceMono.className} text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight`}
            >
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Learn. Train.
              </span>
              <br />
              <span className="text-white">Build. Scale.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              Tech courses for individuals. Career days for schools. Training
              for companies. Software for businesses.
            </p>
            <p className="text-sm text-teal-400 mb-10 font-medium">
              The first company in Kenya doing all four under one roof.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#services"
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.a>
              <motion.a
                href={buildWhatsAppUrl(
                  `Hi, I'd like to learn more about LetsCode's services.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full font-medium flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon size={18} />
                Chat With Us
              </motion.a>
            </div>
          </motion.div>
        </header>

        {/* ── Stats ── */}
        <section className="py-12 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -6, borderColor: "rgba(20,184,166,0.4)" }}
                >
                  <stat.icon className="w-6 h-6 text-teal-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Services ── */}
        <section id="services" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Our{" "}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Whether you're an individual learning to code, a school planning
                a career day, a company upskilling its team, or a business that
                needs software — we've got you covered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => {
                const a =
                  accentClasses[service.accent as keyof typeof accentClasses];
                return (
                  <motion.div
                    key={service.title}
                    className={`bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-2xl border border-white/10 ${a.border} transition-colors overflow-hidden flex flex-col`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Card top */}
                    <div className="p-8 flex-1">
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.icon} flex items-center justify-center flex-shrink-0`}
                        >
                          <service.icon className={`w-6 h-6 ${a.iconColor}`} />
                        </div>
                        <div>
                          <p
                            className={`text-xs font-medium uppercase tracking-widest mb-1 ${a.eyebrow}`}
                          >
                            {service.eyebrow}
                          </p>
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card CTA */}
                    <div className="px-8 pb-8">
                      {service.href ? (
                        <motion.a
                          href={service.href}
                          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm ${a.btn} transition-colors`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      ) : (
                        <motion.a
                          href={service.wa ? buildWhatsAppUrl(service.wa) : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-xl font-medium text-sm transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <WhatsAppIcon size={16} />
                          {service.cta}
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why LetsCode ── */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-black/40 backdrop-blur-lg rounded-3xl border border-white/10 p-10 md:p-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-medium tracking-widest text-teal-400 uppercase mb-3 block">
                    Why Us
                  </span>
                  <h2
                    className={`${spaceMono.className} text-3xl font-bold mb-4`}
                  >
                    The first in Kenya to do this at scale.
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Most companies either teach coding or build software. We do
                    both — and we take it into schools and boardrooms too.
                    That's not common in Kenya. We're building the pipeline from
                    student curiosity to corporate capability, one training at a
                    time.
                  </p>
                  <motion.a
                    href={buildWhatsAppUrl(
                      `Hi, I'd like to partner with LetsCode. Please tell me more.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full font-medium text-sm transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <WhatsAppIcon size={16} />
                    Partner With Us
                  </motion.a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: BadgeCheck, label: "Certified instructors" },
                    { icon: School, label: "School-ready programs" },
                    { icon: Briefcase, label: "Corporate delivery" },
                    {
                      icon: MonitorSmartphone,
                      label: "Production-grade software",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-black/30 rounded-xl p-4 border border-white/10 flex flex-col items-center text-center gap-3"
                    >
                      <item.icon className="w-6 h-6 text-teal-400" />
                      <p className="text-sm text-gray-300 font-medium">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section id="testimonials" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Success{" "}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Stories
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From students landing their first tech jobs to businesses
                shipping better software.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.initials}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                    <div className="ml-auto text-teal-400">
                      <Quote className="w-7 h-7" />
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clients ── */}
        <section id="clients" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`${spaceMono.className} text-4xl font-bold mb-4`}>
                Our{" "}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Clients
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Businesses across Kenya trust us to build their software and
                train their teams.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {clients.map((client) => (
                <motion.a
                  key={client.name}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    className="h-10 w-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    viewBox={client.viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="0"
                      y="28"
                      fontFamily={client.font}
                      fontSize="22"
                      fill={client.color}
                      fontWeight={client.weight}
                    >
                      {client.name}
                    </text>
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/10 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-3xl" />
              <div className="relative z-10">
                <h2
                  className={`${spaceMono.className} text-4xl font-bold mb-4`}
                >
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                    work together?
                  </span>
                </h2>
                <p className="text-gray-300 mb-3 max-w-xl mx-auto">
                  Whether you need a course, a career day, team training, or a
                  software build — reach out and we'll put together the right
                  plan for you.
                </p>
                <p className="text-teal-400 text-sm mb-10 font-medium">
                  Response within 24 hours, guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href={buildWhatsAppUrl(
                      `Hi, I'd like to work with LetsCode. Can we discuss what you offer?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full font-medium transition-colors shadow-lg"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <WhatsAppIcon size={20} />
                    Message Us on WhatsApp
                  </motion.a>
                  <motion.a
                    href="tel:+254714573892"
                    className="px-8 py-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PhoneIcon className="w-5 h-5 text-teal-400" />
                    Call +254 714 573 892
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
