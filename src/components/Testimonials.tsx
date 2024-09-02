'use client'; // Ensure this directive is present for Client Component

import { useEffect, useState } from 'react';

const Testimonials = () => {
  // Animation effect
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 5000); // Animation duration
    };

    handleAnimation();
    const interval = setInterval(handleAnimation, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper function to render stars
  const renderStars = (count: number) => {
    return '⭐'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <main id="testimonials" className="bg-white text-black">
      {/* Testimonials Section */}
      <section id="testimonials" className="py-12">
        <div className="text-center mb-8">
          <span className="block text-lg font-semibold mb-4 mt-10" style={{ color: 'rgb(16,98,94)' }}>What Our Clients Say</span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(14,129,124)' }}>Testimonials</h2>
          <p className="text-base leading-relaxed mb-8">
            Here's what some of our clients and students have to say about their experience with LetsCode.
          </p>
        </div>
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-8">
          {/* Testimonial Card 1 */}
          <div className={`relative bg-[rgb(14,129,124)] text-black p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/3 transition-transform duration-500 ease-in-out ${animation ? 'md:translate-x-5' : ''}`}>
            <p className="text-lg mb-4">
              LetsCode's tailored solutions transformed my software development projects. Their expert team delivered exactly what I needed, making my work in the tech landscape more efficient and impactful.
            </p>
            <span className="block font-semibold mb-2">Elliot</span>
            <div className="text-yellow-400 text-lg">
              {renderStars(5)}
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className={`relative bg-[rgb(14,129,124)] text-black p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/3 transition-transform duration-500 ease-in-out ${animation ? 'md:translate-x-5' : ''}`}>
            <p className="text-lg mb-4">
              I joined LetsCode to kickstart my coding journey. The personalized learning and vibrant community exceeded my expectations. It's not just an education; it's an empowering experience!
            </p>
            <span className="block font-semibold mb-2">Kevin</span>
            <div className="text-yellow-400 text-lg">
              {renderStars(5)}
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className={`relative bg-[rgb(14,129,124)] text-black p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/3 transition-transform duration-500 ease-in-out ${animation ? 'md:translate-x-5' : ''}`}>
            <p className="text-lg mb-4">
              LetsCode Tech Products played a pivotal role in shaping our business software. Their commitment to understanding our unique needs resulted in a product that not only fits perfectly but also propels our business forward.
            </p>
            <span className="block font-semibold mb-2">Catherine</span>
            <div className="text-yellow-400 text-lg">
              {renderStars(5)}
            </div>
          </div>

          {/* Testimonial Card 4 */}
          <div className={`relative bg-[rgb(14,129,124)] text-black p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/3 transition-transform duration-500 ease-in-out ${animation ? 'md:translate-x-5' : ''}`}>
            <p className="text-lg mb-4">
              LetsCode Academy's hands-on projects made learning tech enjoyable and practical. The community support is incredible, and the innovative approaches have made coding feel like second nature.
            </p>
            <span className="block font-semibold mb-2">Fridah P</span>
            <div className="text-yellow-400 text-lg">
              {renderStars(5)}
            </div>
          </div>

          {/* Testimonial Card 5 */}
          <div className={`relative bg-[rgb(14,129,124)] text-black p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/3 transition-transform duration-500 ease-in-out ${animation ? 'md:translate-x-5' : ''}`}>
            <p className="text-lg mb-4">
              LetsCode's focus on nurturing innovation sets them apart. As they grow, it's inspiring to see how they seize every opportunity for expansion, creating new possibilities for the tech community.
            </p>
            <span className="block font-semibold mb-2">Faith Mutua</span>
            <div className="text-yellow-400 text-lg">
              {renderStars(5)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
