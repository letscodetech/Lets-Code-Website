export type Cta = {
  title: string;
  text: string;
  button: string;
  message: string; // pre-filled WhatsApp message
};

const course = (name: string): Cta => ({
  title: `Ready to start the ${name} course?`,
  text: 'Choose recorded (KES 5,000 one time) or live classes (KES 10,000 per month). A personal tutor supports you either way.',
  button: 'Enrol via WhatsApp',
  message: `Hi, I'd like to enrol in the ${name} course. Please send me payment and enrolment details.`,
});

const software: Cta = {
  title: 'Have a software project in mind?',
  text: 'Tell us what you need and we will reply within 24 hours with questions and a clear plan.',
  button: 'Discuss your project',
  message: "Hi, I'd like to discuss a software development project with LetsCode. Please reach out.",
};

const website: Cta = {
  title: 'Need a website for your business?',
  text: 'Tell us what you need and we will send you a clear quote.',
  button: 'Get a website quote',
  message: "Hi, I'd like a quote for a business website. Can we talk?",
};

const ecommerce: Cta = {
  title: 'Want to sell online with M-Pesa?',
  text: 'Tell us what you sell and how you deliver, and we will suggest a setup that fits your budget.',
  button: 'Plan your online store',
  message: "Hi, I'd like to set up an online store with M-Pesa payments. Please send me details.",
};

const systems: Cta = {
  title: 'Ready to run your business on one system?',
  text: 'Describe how your business works today and we will propose what to build first.',
  button: 'Talk to us about a system',
  message: "Hi, I'd like a business management system built for my company. Please reach out.",
};

const b2b: Cta = {
  title: 'Want to upskill your team?',
  text: 'Tell us your team size and goals. We train onsite or online with a custom curriculum.',
  button: 'Get a training quote',
  message: "Hi, I'm interested in B2B tech training for my company. Can you send me a quote and more details?",
};

const schools: Cta = {
  title: 'Want LetsCode at your school?',
  text: 'Career days, coding workshops and digital literacy sessions, customised for your students.',
  button: 'Book your school',
  message: "Hi, I'd like to book LetsCode for a school career day or training session. Please send me details.",
};

const learn: Cta = {
  title: 'Not sure which course to take?',
  text: 'Tell us your goal and we will recommend the right track and format for you.',
  button: 'Get course advice',
  message: "Hi, I'd like help choosing a LetsCode course. Can you advise me?",
};

const international: Cta = {
  title: 'Planning a project with a Kenyan team?',
  text: 'Send us a short brief, your time zone and your timeline. We reply within 24 hours.',
  button: 'Send your brief',
  message: "Hi, I'm interested in working with LetsCode on a software project. Can we set up a call?",
};

const fallback: Cta = {
  title: 'Ready to work with LetsCode?',
  text: 'Whether you need a course, a career day, team training or software, we will put together the right plan.',
  button: 'Chat on WhatsApp',
  message: "Hi, I'd like to learn more about LetsCode's services.",
};

const bySlug: Record<string, Cta> = {
  // Courses
  'fullstack-web-development-course-kenya': course('Fullstack Web Development'),
  'ai-automation-course-kenya': course('AI & Automation'),
  'data-analytics-course-kenya': course('Data Analytics'),
  'mobile-app-development-course-kenya': course('Mobile App Development'),
  'ai-agents-course-kenya': course('AI Agents'),
  'game-development-course-kenya': course('Game Development'),

  // Learning guides
  'how-to-start-learning-to-code-in-kenya': learn,
  'which-programming-language-to-learn-first': learn,
  'how-long-to-learn-web-development': course('Fullstack Web Development'),
  'recorded-vs-live-coding-classes': learn,
  'tech-careers-in-kenya': learn,

  // Websites and online stores
  'website-cost-kenya': website,
  'website-vs-social-media-for-business-kenya': website,
  'ecommerce-website-mpesa-kenya': ecommerce,

  // Software and systems
  'software-development-company-kenya': software,
  'web-and-mobile-app-development-for-business': software,
  'api-integrations-for-kenyan-businesses': software,
  'how-to-choose-a-software-development-company-kenya': software,
  'how-much-does-custom-software-cost-kenya': software,
  'build-vs-buy-business-software-kenya': software,
  'custom-business-management-systems-kenya': systems,
  'pos-and-stock-management-system-kenya': systems,

  // International
  'hire-kenyan-developers-remote': international,
  'software-outsourcing-kenya-international-clients': international,

  // B2B training
  'b2b-tech-training-kenya': b2b,
  'python-automation-training-for-companies': b2b,
  'ai-tools-training-for-teams': b2b,
  'cyber-security-awareness-training-for-staff': b2b,
  'upskilling-vs-hiring-employees': b2b,
  'ai-for-small-business-kenya': b2b,

  // Schools
  'school-career-days-kenya': schools,
  'coding-workshops-for-students': schools,
  'digital-literacy-sessions-schools': schools,
  'how-to-prepare-school-for-career-day': schools,
};

export function getCta(slug: string): Cta {
  return bySlug[slug] ?? fallback;
}

export function whatsappLink(message: string) {
  return `https://wa.me/254714573892?text=${encodeURIComponent(message)}`;
}