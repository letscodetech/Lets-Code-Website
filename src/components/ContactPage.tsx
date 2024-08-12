import React from 'react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <main>
      {/* Skip Link */}
      <a className="sr-only focus:not-sr-only" href="#main">
        Click To Skip To Main
      </a>

      <main id="main">
        

        {/* Contact Form */}
        <section id="form" className="py-12 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="left-section w-full md:w-2/3 p-6 text-black">
              <span className="topper text-xl font-semibold">LetsCode</span>
              <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
              <p className="mb-6">If you have any questions or concerns please feel free to reach out to us. We respond to every call and email.</p>
              <form
                id="contact"
                name="Contact Form"
                method="post"
                data-netlify-recaptcha="true"
                data-netlify="true"
                className="space-y-4"
              >
                <div className="input-group">
                  <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                  <input
                    id="name"
                    aria-label="name"
                    className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full focus:border-[rgb(14,129,124)] focus:outline-none"
                    name="name"
                    placeholder="Full Name"
                    type="text"
                    tabIndex={1}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    id="email"
                    aria-label="email"
                    className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full focus:border-[rgb(14,129,124)] focus:outline-none"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    tabIndex={2}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                  <input
                    id="phone"
                    aria-label="phone number"
                    className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full focus:border-[rgb(14,129,124)] focus:outline-none"
                    name="phone"
                    placeholder="Phone Number"
                    type="tel"
                    tabIndex={3}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="location" className="block text-sm font-medium">Location</label>
                  <input
                    id="location"
                    aria-label="location"
                    className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full focus:border-[rgb(14,129,124)] focus:outline-none"
                    name="location"
                    placeholder="Your Location"
                    type="text"
                    tabIndex={4}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="how" className="block text-sm font-medium">How did you hear about us</label>
                  <input
                    id="how"
                    aria-label="how did you hear about us"
                    name="hear"
                    placeholder="How Did You Hear About Us"
                    type="text"
                    tabIndex={5}
                    required
                    className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full focus:border-[rgb(14,129,124)] focus:outline-none"
                  />
                </div>

                <div className="input-group textarea">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    aria-label="write your message"
                    name="message"
                    placeholder="Tell us about what you need help with"
                    tabIndex={6}
                    required
                    className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full h-32 focus:border-[rgb(14,129,124)] focus:outline-none"
                  ></textarea>
                </div>

                <p className="form-submit">
  <button
    name="submit"
    type="submit"
    id="contact-submit"
    className="button-solid bg-[rgb(16,98,94)] text-white px-4 py-2 rounded"
    data-submit="...Sending"
  >
    Submit
  </button>
</p>

              </form>
            </div>

            {/* Right Section */}
            <div className="contact-right w-full md:w-1/3 p-6 bg-gray-50 text-black">
              <div className="info-group mb-4">
                <span className="heading block font-semibold">Location</span>
                <span className="info">Nairobi, Kenya</span>
              </div>
              <div className="info-group mb-4">
                <span className="heading block font-semibold">Phone</span>
                <a className="info " href="tel:+254110361540">+254 110361540</a>
              </div>
              <div className="info-group mb-4">
                <span className="heading block font-semibold">Email</span>
                <a className="info -500" href="mailto:letsscodeinc@gmail.com">letsscodeinc@gmail.com</a>
              </div>
              <div className="info-group mb-4">
                <span className="heading block font-semibold">Hours</span>
                <span className="info">Mon to Sat: 9am to 7pm</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
};

export default ContactPage;
