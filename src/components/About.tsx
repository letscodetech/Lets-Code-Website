import Image from 'next/image';

const About = () => {
  return (
    <main id="main" className="bg-white text-black">
      {/* Landing Section */}
      <section id="int-hero" className="py-12 text-center mt-12">
        <h1 className="text-4xl font-bold" style={{ color: 'rgb(14,129,124)' }}>About Company</h1>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
          <div className="flex-1 mb-8 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt="Who We Are"
              width={600}
              height={400}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="flex-1 md:ml-8">
            <span className="block text-lg font-semibold mb-4" style={{ color: 'rgb(16,98,94)' }}>Who We Are</span>
            <p className="text-base leading-relaxed mb-4">
              LetsCode crafts tailored software for your unique needs and revolutionizes learning.
            </p>
            <p>
              LetsCode Tech Products crafts tailored software solutions for individuals and businesses, ensuring each product seamlessly fits unique needs, elevating you in the tech landscape. In tech education, LetsCode revolutionizes learning with personalized approaches, hands-on projects, and a vibrant community, nurturing innovation and empowering aspiring coders for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-12">
        <div className="text-center mb-8">
          <span className="block text-lg font-semibold mb-4" style={{ color: 'rgb(14,129,124)' }}>Our Team</span>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(16,98,94)' }}>Meet Our Staff</h2>
          <p className="text-base leading-relaxed">
            Our dedicated team brings expertise and passion to ensure your needs are met. No empty promises—just commitment and results.
          </p>
        </div>
        <div className="container mx-auto flex flex-wrap justify-center px-4 sm:px-6 lg:px-8">
          {/* Staff Member 1 */}
          <div className="flex flex-col md:flex-row items-center mb-8 w-full max-w-sm">
            <Image
              src="/images/Mollen Wambui.jpg"
              alt="Mollen Wambui"
              width={500}
              height={400}
              layout="responsive"
              quality={100}
            />
            <div className="text-center md:text-left mt-6 md:mt-0 md:ml-6">
              <h3 className="text-xl font-semibold" style={{ color: 'rgb(14,129,124)' }}>Mollen Wambui</h3>
              <span className="block text-sm font-medium mb-2" style={{ color: 'rgb(16,98,94)' }}>Founder & CEO</span>
              <p>
                As the visionary founder and CEO of LetsCode, Mollen brings a dynamic energy to the tech industry. With a two-year tenure in tech and a foundation in full-stack software development from AkiraChix, Mollen is dedicated to driving innovation and fostering inclusivity. Her passion for empowering others is exemplified by her commitment to providing educational opportunities in tech, particularly for those with limited access. Mollen leads LetsCode with a hands-on approach, leveraging her extensive experience to shape the company's strategic direction and ensuring its success in the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Staff Member 2 */}
          <div className="flex flex-col md:flex-row items-center mb-8 w-full max-w-sm">
            <Image
              src="/images/Kenneth Ndiritu.jpg"
              alt="Kenneth Ndiritu"
              width={500}
              height={300}
              layout="responsive"
              quality={100}
            />
            <div className="text-center md:text-left mt-6 md:mt-0 md:ml-6">
              <h3 className="text-xl font-semibold" style={{ color: 'rgb(14,129,124)' }}>Kenneth Ndiritu</h3>
              <span className="block text-sm font-medium mb-2" style={{ color: 'rgb(16,98,94)' }}>Board Advisor</span>
              <p>
                Kenneth Ndiritu is a seasoned Board Advisor with a robust background in software quality assurance, particularly in leading complex, mission-critical projects across various industries. His expertise spans over 8 years, marked by his ISTQB certification and deep involvement in the entire system development lifecycle. Kenneth is adept at designing and implementing test strategies that drive efficiency, cost savings, and compliance. His strategic insights and hands-on approach make him an invaluable asset to the board, ensuring that the company’s technology and processes are not only compliant but also optimized for success.
              </p>
            </div>
          </div>

          {/* Staff Member 3 */}
          <div className="flex flex-col md:flex-row items-center mb-8 w-full max-w-sm">
            <Image
              src="/images/Lucy Wangari.jpg"
              alt="Lucy Wangari"
              width={500}
              height={400}
              layout="responsive"
              quality={100}
            />
            <div className="text-center md:text-left mt-6 md:mt-0 md:ml-6">
              <h3 className="text-xl font-semibold" style={{ color: 'rgb(14,129,124)' }}>Lucy Wangari</h3>
              <span className="block text-sm font-medium mb-2" style={{ color: 'rgb(16,98,94)' }}>Chief Financial Officer</span>
              <p>
                As the accomplished CFO of LetsCode, Lucy brings a wealth of financial expertise, holding a degree in Finance and Business Management. With a strong foundation in financial strategy and fiscal management, Lucy plays a pivotal role in shaping LetsCode's financial success. Her proficiency extends to budgeting, forecasting, and ensuring the fiscal health of the organization. A true financial strategist, Lucy adds a layer of stability to LetsCode's innovative journey. On a lighter note, a fun fact about her is that she is an avid collector of rare coins, showcasing her keen eye for value beyond the balance sheet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
