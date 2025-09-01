export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Brian Phan</h1>
          <nav className="hidden md:flex space-x-6 text-sm desktop-nav">
            <a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors">About</a>
            <a href="#experience" className="text-slate-300 hover:text-purple-400 transition-colors">Experience</a>
            <a href="#expertise" className="text-slate-300 hover:text-purple-400 transition-colors">Expertise</a>
            <a href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-white">
              Engineering leader. 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Problem solver.
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl">
              I&apos;m a <strong className="text-purple-400">Software Engineering Manager</strong> with over a decade of experience building large-scale distributed systems across Amazon and Microsoft. My background spans software engineering and data science, and I&apos;ve led teams across a range of domains—from machine learning to backend infrastructure. Lately, I&apos;ve been focused on building the service platform for maintaining physical security for AWS sites around the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#expertise" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                View Expertise
              </a>
              <a href="#contact" className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all">
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section id="expertise" className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Building teams that thrive.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              I believe great engineering comes from empowering talented people with the right tools, processes, and security—while never losing sight of what matters most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Operational Security */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Operational Security</h3>
              <p className="text-slate-300 leading-relaxed">Cloud and on-premise physical security systems. End-to-end device and video management services with ML and CV detection.</p>
            </div>

            {/* Compliance Automation */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Compliance Automation</h3>
              <p className="text-slate-300 leading-relaxed">Privacy-preserving infrastructure, secure enclaves, and XACML-based data governance. GDPR, CCPA, DMA automation and enforcement at global scale.</p>
            </div>

            {/* Distributed Systems */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Distributed Systems</h3>
              <p className="text-slate-300 leading-relaxed">Large-scale microservices architecture, high-availability systems, and resilient infrastructure design.</p>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">AI & Machine Learning</h3>
              <p className="text-slate-300 leading-relaxed">AI-powered security analytics, unauthorized access detection, predictive modeling, and advanced data science.</p>
            </div>

            {/* Platform Engineering */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Platform Engineering</h3>
              <p className="text-slate-300 leading-relaxed">Commerce platforms, content delivery systems, licensing services, and marketplace infrastructure.</p>
            </div>

            {/* Engineering Leadership */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Engineering Leadership</h3>
              <p className="text-slate-300 leading-relaxed">Leading cross-functional teams, scaling organizations, mentorship, and driving strategic technical initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Experience */}
      <section id="experience" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              From startup hustle to enterprise scale.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              I&apos;ve helped teams grow from scrappy beginnings to powering millions of users, learning what works (and what doesn&apos;t) along the way.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Development Manager @ AWS Security</h3>
                  <p className="text-purple-400 mb-4">May 2025 - Present</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Responsible for video management and AI-powered analytical services that secure AWS data centers, Amazon corporate buildings, 
                warehouse fulfillment centers, Prime Air facilities, and more worldwide. This system is fundamental to physical security 
                operations that safeguard employees, critical infrastructure, intellectual property, and customer data. Leading resilient 
                on-premise video management solutions and AI-powered analytical innovations for unauthorized access detection.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Development Manager @ Amazon Devices & Services Privacy</h3>
                  <p className="text-purple-400 mb-4">February 2024 - May 2025</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AMZ</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Led compliance automation at scale for Devices &amp; Services Trust &amp; Privacy, driving initiatives that enable automatic, 
                auditable enforcement of global regulations like GDPR, CCPA, and Digital Markets Act (DMA) for Amazon Devices &amp; Services 
                (eero, Ring, FireTV, Alexa, Kindle, Kuiper, and more).
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Development Manager @ Amazon Alexa Privacy</h3>
                  <p className="text-purple-400 mb-4">February 2020 - February 2024</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AMZ</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Built privacy-preserving infrastructure including high-throughput privacy tools hosted on secure enclaves, 
                automated child data egress control using XACML, and specialized auditing services leveraging advanced modeling 
                techniques to measure privacy risks. Led development of critical privacy infrastructure at scale.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Development Engineer @ Amazon Alexa Mobile & Entertainment</h3>
                  <p className="text-purple-400 mb-4">December 2017 - February 2020</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AMZ</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Scaled core services powering Alexa&apos;s mobile, media, web, and backend platforms during international expansion to 40+ countries. 
                Delivered 100x efficiency gains driving $50M–$75M in annual productivity improvements. Enhanced customer experience 
                increasing Alexa Mobile App ratings from 1.5 to 4.6 stars, contributing to Amazon Music&apos;s growth to $1.5B annual revenue.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Software Engineer @ Microsoft Xbox Store</h3>
                  <p className="text-purple-400 mb-4">April 2015 - December 2017</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MS</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Built and scaled Microsoft&apos;s marketplace services powering Xbox Live, Office, Windows, and Phone commerce functionality. 
                Developed licensing and entitlement services supporting Xbox One&apos;s global launch, ensuring secure, high-availability access 
                to digital content across millions of users. Reduced Microsoft Catalog publishing latency from 18 hours to near-instant, 
                and increased content delivery throughput by 18% while reducing costs by 40%.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Data Scientist @ Microsoft Windows</h3>
                  <p className="text-purple-400 mb-4">February 2014 - April 2015</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MS</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Developed machine learning models and derived insights to improve operating system quality for Windows, Windows Phone, 
                Xbox, Azure, and internal back-end systems. Applied advanced analytics and data science techniques to enhance 
                engineering team decision-making and product quality across Microsoft&apos;s ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Leadership through real experience.
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              My approach comes from years of learning what actually moves the needle—building trust, removing blockers, and creating systems that let great engineers do their best work.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Engineering Leadership Philosophy</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I focus on empowering teams to deliver their best work by creating clear processes that support both individual growth and organizational goals. My approach combines deep technical expertise with pragmatic leadership—I believe in building systems and teams that scale efficiently while maintaining the highest standards for privacy, security, and user trust. I constantly adapt my leadership style based on what the team needs to succeed, whether that&apos;s removing blockers, providing technical mentorship, or driving strategic alignment across organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">Let&apos;s Connect</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:brianphan06@gmail.com" 
               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
              BrianPhan06@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/brianphan-dev" target="_blank" rel="noopener noreferrer" 
               className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Brian Phan. Software Engineering Manager @ AWS.</p>
        </div>
      </footer>
    </div>
  );
}
