import { PhoneIcon } from '@heroicons/react/24/outline'; // Import Heroicons PhoneIcon
import { spaceMono } from '../styling/font';
import Footer from '@/components/Footer'; // Import the Footer component

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header
        className="relative w-full text-center mb-12"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664041273166-58f5fdf2e6d3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '50vh', // Make it cover the full viewport height
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Overlay */}
        <div className="relative z-10 p-8">
          <h1 className={`text-5xl font-bold ${spaceMono.className} text-white mb-4`} style={{ marginTop: '4rem' }}>
            LetsCode
          </h1>
          <p className="text-xl text-white mb-8">
            To democratize tech education and ignite the spark of innovation in every aspiring coder.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-[rgb(14,129,124)] text-white rounded-md shadow-lg hover:bg-[rgb(16,98,94)] transition-transform duration-300 transform hover:scale-105"
            >
              About
            </a>
            <div className="inline-flex items-center px-6 py-3 bg-[rgb(14,129,124)] text-white rounded-md shadow-lg hover:bg-[rgb(16,98,94)] transition-transform duration-300 transform hover:scale-105">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <a href="tel:+254110361540" className="text-white">CALL NOW +254 110361540</a>
            </div>
          </div>
        </div>
      </header>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {/* Card 1 */}
        <div className="bg-[rgb(14,129,124)] text-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <h2 className="text-xl font-semibold mb-4">School Training</h2>
            <p className="mb-4">
              The LetsCode School Training is a transformative one-year crash course, breaking financial barriers to make quality coding education accessible for all. Our vision is to create an inclusive institution where aspiring coders of any age can embark on a comprehensive coding journey, shaping their future in the dynamic tech landscape.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-white text-[rgb(14,129,124)] rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-[rgb(16,98,94)] text-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <h2 className="text-xl font-semibold mb-4">Tech Products</h2>
            <p className="mb-4">
              LetsCode Tech Products specializes in crafting tailored software solutions for individuals and businesses. Our expert team ensures each product seamlessly fits your unique needs, elevating you in the tech landscape.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-white text-[rgb(16,98,94)] rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-[rgb(14,129,124)] text-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-between" style={{ height: '400px' }}>
          <div>
            <h2 className="text-xl font-semibold mb-4">Bootcamps</h2>
            <p className="mb-4">
              The LetsCode Bootcamps are intensive, short-term programs designed to fast-track your coding skills. Tailored for efficiency, these bootcamps offer hands-on learning experiences, preparing you for real-world challenges. Whether you're a beginner or looking to upskill, LetsCode Bootcamps are your accelerated path to coding proficiency.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block px-4 py-2 bg-white text-[rgb(14,129,124)] rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
