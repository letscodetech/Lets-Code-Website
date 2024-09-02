'use client';

import React from 'react';
import emailjs from 'emailjs-com';

const ContactPage: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_bkg03iq', 'template_p3ilptc', e.currentTarget, '0ZE_zARFVYzE-vqYY')
      .then((result) => {
        // Handle success
        console.log('Success:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error.text);
        alert('Error sending message. Please try again.');
      });
  };

  return (
    <main className="bg-white py-12">
      {/* Centered Contact Form Section */}
      <section className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          {/* Header Section */}
          <div className="left-section text-black mb-6">
            <span className="topper text-xl font-semibold" style={{ color: 'rgb(14,129,124)' }}>LetsCode</span>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'rgb(16,98,94)' }}>Send a Message</h2>
            <p className="mb-6">
              If you have any questions or concerns, please feel free to reach out to us. We respond to every call and email.
            </p>
          </div>

          {/* Contact Form */}
          <form
            id="contact"
            name="Contact Form"
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <div className="input-group">
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                aria-label="name"
                className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full text-black focus:border-[rgb(14,129,124)] focus:outline-none"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                aria-label="email"
                className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full text-black focus:border-[rgb(14,129,124)] focus:outline-none"
                name="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                aria-label="write your message"
                name="message"
                placeholder="Tell us about what you need help with"
                className="border-[rgb(14,129,124)] border-2 rounded p-2 w-full h-32 text-black focus:border-[rgb(14,129,124)] focus:outline-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                className="bg-[rgb(16,98,94)] text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
