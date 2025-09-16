"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Users, Briefcase } from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | LetsCode</title>
        <meta name="description" content="Learn about LetsCode, our team, and our mission to democratize tech education." />
        <meta name="keywords" content="about letscode, our team, tech education" />
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
                About
              </span>{" "}
              <span className="text-white">LetsCode</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Crafting tailored software solutions and revolutionizing tech education for all.
            </p>
          </motion.div>
        </header>

        {/* Who We Are Section */}
        <section id="who-we-are" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                    alt="Who We Are"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full mb-6">
                    <Briefcase className="w-5 h-5 text-teal-400 mr-2" />
                    <span className="text-teal-400 font-medium">Who We Are</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      Crafting Innovation
                    </span>
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    LetsCode crafts tailored software for your unique needs and revolutionizes learning.
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    LetsCode Tech Products crafts tailored software solutions for individuals and businesses, ensuring each product seamlessly fits unique needs, elevating you in the tech landscape. In tech education, LetsCode revolutionizes learning with personalized approaches, hands-on projects, and a vibrant community, nurturing innovation and empowering aspiring coders for growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section id="staff" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full mb-4">
                <Users className="w-5 h-5 text-teal-400 mr-2" />
                <span className="text-teal-400 font-medium">Our Team</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Meet Our Staff
                </span>
              </h2>
              
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our dedicated team brings expertise and passion to ensure your needs are met. No empty promises—just commitment and results.
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Staff Member 1 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <Image
                      src="/images/Mollen Wambui.jpg"
                      alt="Mollen Wambui"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                        MW
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold">Mollen Wambui</h3>
                        <p className="text-teal-400">Founder & CEO</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      As the visionary founder and CEO of LetsCode, Mollen brings a dynamic energy to the tech industry. With a two-year tenure in tech and a foundation in full-stack software development from AkiraChix, Mollen is dedicated to driving innovation and fostering inclusivity. Her passion for empowering others is exemplified by her commitment to providing educational opportunities in tech, particularly for those with limited access. Mollen leads LetsCode with a hands-on approach, leveraging her extensive experience to shape the company's strategic direction and ensuring its success in the ever-evolving tech landscape.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Staff Member 2 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/3 relative">
                    <Image
                      src="/images/Benja.jpeg"
                      alt="Benjamin Kereu"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                        BK
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold">Benjamin Kereu</h3>
                        <p className="text-teal-400">Company Lawyer & Advocate of the High Court</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      Benjamin Kereu serves as the company lawyer for LetsCode. As an advocate of the High Court, he ensures all our legal operations and contracts are compliant and secure. His commitment to integrity, precision, and professional excellence has made him an indispensable part of the LetsCode leadership team.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Staff Member 3 */}
              <motion.div 
                className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <Image
                      src="/images/Lucy Wangari.jpg"
                      alt="Lucy Wangari"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                        LW
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold">Lucy Wangari</h3>
                        <p className="text-teal-400">Chief Financial Officer</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      As the accomplished CFO of LetsCode, Lucy brings a wealth of financial expertise, holding a degree in Finance and Business Management. With a strong foundation in financial strategy and fiscal management, Lucy plays a pivotal role in shaping LetsCode's financial success. Her proficiency extends to budgeting, forecasting, and ensuring the fiscal health of the organization. A true financial strategist, Lucy adds a layer of stability to LetsCode's innovative journey. On a lighter note, a fun fact about her is that she is an avid collector of rare coins, showcasing her keen eye for value beyond the balance sheet.
                    </p>
                  </div>
                </div>
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
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                    Join Our Journey
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Be part of our mission to democratize tech education and innovation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="#"
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full font-medium shadow-lg hover:shadow-teal-500/30 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="/"
                    className="px-8 py-4 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full font-medium"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back to Home
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
  
      </div>
    </>
  );
};

export default About;