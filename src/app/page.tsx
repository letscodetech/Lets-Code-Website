import { PhoneIcon } from "@heroicons/react/24/outline"; // Import Heroicons PhoneIcon
import { spaceMono } from "../styling/font";
import Footer from "@/components/Footer"; // Import the Footer component
import Head from "next/head"; // Import Head for SEO

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LetsCode | Democratizing Tech Education</title>
        <meta
          name="description"
          content="LetsCode is a tech startup aimed at democratizing tech education and innovation. Join us for bootcamps, school training, and tailored tech products."
        />
        <meta
          name="keywords"
          content="tech education, coding bootcamp, tech products, school training"
        />
        <meta name="author" content="LetsCode, letsCode, Lets Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="LetsCode | Democratizing Tech Education"
        />
        <meta
          property="og:description"
          content="We provide inclusive tech education and innovation through bootcamps, school training, and custom tech products."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://www.lets-code.tech/" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header
          className="relative w-full text-center mb-12"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664041273166-58f5fdf2e6d3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "50vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
          {/* Overlay */}
          <div className="relative z-10 p-8">
            <h1
              className={`text-5xl font-bold ${spaceMono.className} text-white mb-4`}
              style={{ marginTop: "4rem" }}
            >
              LetsCode
            </h1>
            <p className="text-xl text-white mb-8">
              To democratize tech education and ignite the spark of innovation
              in every aspiring coder.
            </p>
            <div className="flex flex-row justify-center gap-4 mb-8 px-4 sm:mb-12">
              <a
                href="/about"
                className="inline-flex items-center px-4 py-2 bg-[rgb(14,129,124)] text-white text-sm rounded-md shadow-lg hover:bg-[rgb(16,98,94)] transition-transform duration-300 transform hover:scale-105"
              >
                About
              </a>
              <div className="inline-flex items-center px-4 py-2 bg-[rgb(14,129,124)] text-white text-sm rounded-md shadow-lg hover:bg-[rgb(16,98,94)] transition-transform duration-300 transform hover:scale-105">
                <PhoneIcon className="w-4 h-4 mr-2" />
                <a href="tel:+254110361540" className="text-white">
                  CALL NOW +254 758612917
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-8 p-4 sm:p-8">
          {/* Card 1 */}
          <div
            className="bg-[rgb(14,129,124)] text-white p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-between overflow-auto"
            style={{ height: "400px" }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">School Training</h2>
              <p className="mb-4 text-sm sm:text-base">
                The LetsCode School Training is a transformative one-year crash
                course, breaking financial barriers to make quality coding
                education accessible for all. Our vision is to create an
                inclusive institution where aspiring coders of any age can
                embark on a comprehensive coding journey, shaping their future
                in the dynamic tech landscape.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[rgb(16,98,94)] text-white p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-between overflow-auto"
            style={{ height: "400px" }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">Tech Products</h2>
              <p className="mb-4 text-sm sm:text-base">
                LetsCode Tech Products specializes in crafting tailored software
                solutions for individuals and businesses. Our expert team
                ensures each product seamlessly fits your unique needs,
                elevating you in the tech landscape.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[rgb(14,129,124)] text-white p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-between overflow-auto"
            style={{ height: "400px" }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">Bootcamps</h2>
              <p className="mb-4 text-sm sm:text-base">
                The LetsCode Bootcamps are intensive, short-term programs
                designed to fast-track your coding skills. Tailored for
                efficiency, these bootcamps offer hands-on learning experiences,
                preparing you for real-world challenges. Whether you're a
                beginner or looking to upskill, LetsCode Bootcamps are your
                accelerated path to coding proficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
