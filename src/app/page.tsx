export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Brian Phan</h1>
          <nav className="hidden md:flex space-x-6 text-sm desktop-nav">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
            <a href="#expertise" className="hover:text-gray-600 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Brian Phan
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl">
              I&apos;m a <strong>Software Engineering Manager</strong> with over a decade of experience building large-scale distributed systems across Amazon and Microsoft. My background spans software engineering and data science, and I&apos;ve led teams across a range of domains—from machine learning to backend infrastructure. Lately, I&apos;ve been focused on building the service platform for maintaining physical security for AWS sites around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section id="expertise" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <em className="text-gray-600">Areas of Expertise</em>
            <hr className="mt-4 mb-12 border-gray-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Operational Security</h3>
              <p className="text-gray-600">Cloud and on-premise physical security systems. End-to-end device and video management support with ML and CV detection. </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Compliance Automation</h3>
              <p className="text-gray-600">Privacy-preserving infrastructure, secure enclaves, and XACML-based data governance. GDPR, CCPA, DMA automation and enforcement at global scale with auditable compliance frameworks</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Distributed Systems</h3>
              <p className="text-gray-600">Large-scale microservices architecture, high-availability systems, and resilient infrastructure design</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600">AI-powered security analytics, unauthorized access detection, predictive modeling, and advanced data science</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Platform Engineering</h3>
              <p className="text-gray-600">Commerce platforms, content delivery systems, licensing services, and marketplace infrastructure</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Engineering Leadership</h3>
              <p className="text-gray-600">Leading cross-functional teams, scaling organizations, mentorship, and driving strategic technical initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <em className="text-gray-600">Professional Experience</em>
            <hr className="mt-4 mb-12 border-gray-300" />
          </div>
          <div className="space-y-16">
            <div className="border-l-2 border-gray-200 pl-8 hover-lift">
              <h3 className="text-xl md:text-2xl font-medium mb-2">Software Development Manager @ AWS Security</h3>
              <p className="text-gray-600 mb-4">May 2025 - Present</p>
              <p className="text-gray-700 leading-relaxed">
                Responsible for video management and AI-powered analytical services that secure AWS data centers, Amazon corporate buildings, 
                warehouse fulfillment centers, Prime Air facilities, and more worldwide. This system is fundamental to physical security 
                operations that safeguard employees, critical infrastructure, intellectual property, and customer data. Leading resilient 
                on-premise video management solutions and AI-powered analytical innovations for unauthorized access detection.
              </p>
            </div>
            
            <div className="border-l-2 border-gray-200 pl-8 hover-lift">
              <h3 className="text-xl md:text-2xl font-medium mb-2">Software Development Manager @ Amazon Devices & Services Privacy</h3>
              <p className="text-gray-600 mb-4">February 2024 - May 2025</p>
              <p className="text-gray-700 leading-relaxed">
                Led compliance automation at scale for Devices &amp; Services Trust &amp; Privacy, driving initiatives that enable automatic, 
                auditable enforcement of global regulations like GDPR, CCPA, and Digital Markets Act (DMA) for Amazon Devices &amp; Services 
                (eero, Ring, FireTV, Alexa, Kindle, Kuiper, and more).
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8 hover-lift">
              <h3 className="text-xl md:text-2xl font-medium mb-2">Software Development Manager @ Amazon Alexa Privacy</h3>
              <p className="text-gray-600 mb-4">February 2020 - February 2024</p>
              <p className="text-gray-700 leading-relaxed">
                Built privacy-preserving infrastructure including high-throughput privacy tools hosted on secure enclaves, 
                automated child data egress control using XACML, and specialized auditing services leveraging advanced modeling 
                techniques to measure privacy risks. Led development of critical privacy infrastructure at scale.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8 hover-lift">
              <h3 className="text-xl md:text-2xl font-medium mb-2">Software Development Engineer @ Amazon Alexa Mobile & Entertainment</h3>
              <p className="text-gray-600 mb-4">December 2017 - February 2020</p>
              <p className="text-gray-700 leading-relaxed">
                Scaled core services powering Alexa&apos;s mobile, media, web, and backend platforms during international expansion to 40+ countries. 
                Delivered 100x efficiency gains driving $50M–$75M in annual productivity improvements. Enhanced customer experience 
                increasing Alexa Mobile App ratings from 1.5 to 4.6 stars, contributing to Amazon Music&apos;s growth to $1.5B annual revenue.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8 hover-lift">
              <h3 className="text-xl md:text-2xl font-medium mb-2">Software Engineer @ Microsoft Xbox Store</h3>
              <p className="text-gray-600 mb-4">April 2015 - December 2017</p>
              <p className="text-gray-700 leading-relaxed">
                Built and scaled Microsoft&apos;s marketplace services powering Xbox Live, Office, Windows, and Phone commerce functionality. 
                Developed licensing and entitlement services supporting Xbox One&apos;s global launch, ensuring secure, high-availability access 
                to digital content across millions of users. Reduced Microsoft Catalog publishing latency from 18 hours to near-instant, 
                and increased content delivery throughput by 18% while reducing costs by 40%.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-8 hover-lift">
              <h3 className="text-xl md:text-2xl font-medium mb-2">Data Scientist @ Microsoft Windows</h3>
              <p className="text-gray-600 mb-4">February 2014 - April 2015</p>
              <p className="text-gray-700 leading-relaxed">
                Developed machine learning models and derived insights to improve operating system quality for Windows, Windows Phone, 
                Xbox, Azure, and internal back-end systems. Applied advanced analytics and data science techniques to enhance 
                engineering team decision-making and product quality across Microsoft&apos;s ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <em className="text-gray-600">Engineering Leadership Philosophy</em>
            <hr className="mt-4 mb-12 border-gray-300" />
          </div>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              I focus on empowering teams to deliver their best work by creating clear processes that support both individual growth and organizational goals. My approach combines deep technical expertise with pragmatic leadership—I believe in building systems and teams that scale efficiently while maintaining the highest standards for privacy, security, and user trust. I constantly adapt my leadership style based on what the team needs to succeed, whether that&apos;s removing blockers, providing technical mentorship, or driving strategic alignment across organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-12">Let&apos;s Connect</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-base md:text-lg">
            <a href="mailto:brianphan06@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors hover-lift">
              BrianPhan06@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/brianphan-dev" target="_blank" rel="noopener noreferrer" 
               className="text-gray-700 hover:text-gray-900 transition-colors hover-lift">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Brian Phan. Software Engineering Manager @ AWS.</p>
        </div>
      </footer>
    </div>
  );
}
