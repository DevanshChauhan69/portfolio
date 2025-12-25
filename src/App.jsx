import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Header */}
      <header className="border-b border-[#E8E3D8] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-[#2C5F4F]">DC</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#work" className="text-[#5C5C5C] hover:text-[#2C5F4F] transition">Work</a>
            <a href="#projects" className="text-[#5C5C5C] hover:text-[#2C5F4F] transition">Projects</a>
            <a href="#contact" className="text-[#5C5C5C] hover:text-[#2C5F4F] transition">Contact</a>
          </nav>
          <a
            href="/Devansh Chauhan.pdf"
            download
            className="px-5 py-2.5 text-sm font-medium bg-[#2C5F4F] text-white rounded-full hover:bg-[#234A3D] transition"
          >
            Resume
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-[#EBF5F0] text-[#2C5F4F] text-sm font-medium rounded-full">
                Android & Fullstack Developer
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1A1A1A] leading-tight">
                Devansh
                <br />
                Chauhan
              </h1>
              <p className="text-lg text-[#5C5C5C] leading-relaxed max-w-lg">
                I build Android and web applications that solve real problems. 
                From native mobile apps to full-stack platforms, I focus on creating 
                intuitive interfaces and reliable systems that help businesses grow 
                and users accomplish their goals.
              </p>
              <div className="flex gap-4 pt-4">
                <a    
                  href="#work"
                  className="px-8 py-3.5 bg-[#2C5F4F] text-white rounded-full font-medium hover:bg-[#234A3D] transition"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border-2 border-[#2C5F4F] text-[#2C5F4F] rounded-full font-medium hover:bg-[#2C5F4F] hover:text-white transition"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="hidden md:block relative bg-[#1E1E1E] rounded-3xl p-8 border border-[#2C5F4F] shadow-xl">
  <div className="font-mono text-sm text-green-400">
    <div className="text-purple-400">class <span className="text-yellow-400">Developer</span> {'{'}</div>
    <div className="ml-4 text-blue-400">constructor() {'{'}</div>
    <div className="ml-8">this.name = <span className="text-orange-400">"Devansh"</span>;</div>
    <div className="ml-8">this.skills = [</div>
    <div className="ml-12 text-orange-400">"Android",</div>
    <div className="ml-12 text-orange-400">"Kotlin",</div>
    <div className="ml-12 text-orange-400">"React"</div>
    <div className="ml-8">];</div>
    <div className="ml-4">{'}'}</div>
    <div>{'}'}</div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-white border-y border-[#E8E3D8]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
          {[
            { num: "1+", label: "Years Experience" },
            { num: "10+", label: "Projects Completed" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#2C5F4F]">{stat.num}</div>
              <div className="text-sm text-[#5C5C5C] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Freelance Work */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#EBF5F0] text-[#2C5F4F] text-sm font-medium rounded-full mb-4">
              Freelance Work
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">
              Client Success Stories
            </h2>
            <p className="text-lg text-[#5C5C5C] mt-4 max-w-2xl mx-auto">
              Real-world solutions delivering measurable results for businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Arihant Auto",
                desc: "Digital inventory system improving operational efficiency and lead conversion for an auto-parts business.",
                link: "https://arihantauto.in",
                icon: "🚗",
              },
              {
                title: "Samatva Tournaments",
                desc: "eSports tournament platform with player registration, dashboards, and real-time updates.",
                link: "https://tournament.samatva.gg",
                icon: "🎮",
              },
              {
                title: "Small Business App",
                desc: "Custom Android application digitalizing workflows and enhancing customer engagement.",
                icon: "📱",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border border-[#E8E3D8] hover:border-[#2C5F4F] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5C5C5C] leading-relaxed mb-4">
                  {item.desc}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-[#2C5F4F] font-medium hover:gap-2 transition-all"
                  >
                    Visit Site 
                    <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-[#F5F3ED]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white text-[#2C5F4F] text-sm font-medium rounded-full mb-4 border border-[#E8E3D8]">
              Personal Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">
              Innovation & Exploration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Livestream Pro",
                desc: "Pay-to-view Android livestreaming platform enabling trainers to broadcast while users watch and download sessions. Features secure payment integration, real-time video streaming, session recording with cloud storage, and user authentication. Built with modern Android architecture using MVVM pattern, Room database for offline access, and ExoPlayer for smooth video playback.",
                tags: ["Android", "Live Streaming", "Kotlin"],
              },
              {
                title: "Bluetooth Music Transfer",
                desc: "Seamless MP3 sharing over Bluetooth across modern and legacy Android devices with intuitive UX. Handles device discovery, pairing, and file transfer protocols while maintaining compatibility across different Android versions. Includes progress tracking, transfer history, and batch file sharing capabilities. Optimized for both performance and battery efficiency during transfers.",
                tags: ["Kotlin", "Bluetooth", "Android"],
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#E8E3D8] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-semibold text-[#1A1A1A] mb-3">
                  {proj.title}
                </h3>
                <p className="text-[#5C5C5C] leading-relaxed mb-4">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-[#EBF5F0] text-[#2C5F4F] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#2C5F4F] to-[#1F4839] rounded-3xl p-12 md:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Looking for a developer who delivers quality and results? 
              Let's discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dc18495@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-white text-[#2C5F4F] rounded-full font-medium hover:bg-gray-100 transition"
                >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/devansh-chauhan-0b440b1b9/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#2C5F4F] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#E8E3D8] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-serif font-bold text-[#2C5F4F]">
              Devansh Chauhan
            </div>
            <div className="text-sm text-[#5C5C5C]">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}