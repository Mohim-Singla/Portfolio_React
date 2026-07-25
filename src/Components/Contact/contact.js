import React from 'react';
import './contact.css';
import profilePhoto from '../Intro/mohim2.png';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Mohim-Singla',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohim-singla',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/mohim__singla__',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <div
      className="bg-gradient-to-t from-[#000] to-[#272525d2] min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 sm:px-8 py-10 sm:py-14 scroll-mt-16 text-white relative overflow-hidden"
      id="about"
    >
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#efb10a]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#efb10a]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2"></div>

      {/* Section Header */}
      <h1 className="text-center text-4xl sm:text-5xl text-white mb-16 sm:mb-24 font-cursive relative z-10">
        &#60;<span className="text-[#efb10a]">About</span> & Contact &#47;&#62;
      </h1>

      <div className="max-w-6xl mx-auto w-full relative z-10 bg-[#161515]/90 border border-zinc-800/80 hover:border-[#efb10a]/50 transition-all duration-500 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
          
          {/* Profile Picture Frame (Left) */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#efb10a] to-amber-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#121212] bg-zinc-900 shadow-2xl flex items-center justify-center">
              <img
                src={profilePhoto}
                alt="Mohim Singla"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio Description & Links (Right) */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Hi, I'm <span className="text-[#efb10a]">Mohim Singla</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed text-justify max-w-2xl font-light">
              I am a <strong className="text-[#efb10a] font-semibold">Software Engineer</strong> with a strong foundation in building scalable microservices and optimizing system performance. 
              I have a proven track record of improving application efficiency, leading critical projects, and adapting to modern tech stacks to drive high-impact contributions in innovative engineering teams.
            </p>

            {/* Responsive Unified Glassmorphic Contact & Social Bar */}
            <div className="pt-2 w-full flex justify-center lg:justify-start">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-3.5 sm:px-6 sm:py-3 rounded-3xl bg-[#1e1d1d]/80 border border-zinc-800 hover:border-[#efb10a]/50 backdrop-blur-md shadow-xl transition-all duration-300">
                
                {/* Contact Links Row (Phone & Email stay together) */}
                <div className="flex items-center gap-2.5 sm:gap-4 text-xs sm:text-sm whitespace-nowrap">
                  {/* Phone */}
                  <a
                    href="tel:+917814693142"
                    className="flex items-center gap-2 text-zinc-300 hover:text-[#efb10a] transition-colors duration-300 font-medium"
                  >
                    <svg className="w-4 h-4 text-[#efb10a] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 7814693142</span>
                  </a>

                  {/* Divider */}
                  <div className="w-[1px] h-4 bg-zinc-700/60 shrink-0"></div>

                  {/* Email */}
                  <a
                    href="mailto:mohimsingla@gmail.com"
                    className="flex items-center gap-2 text-zinc-300 hover:text-[#efb10a] transition-colors duration-300 font-medium"
                  >
                    <svg className="w-4 h-4 text-[#efb10a] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>mohimsingla@gmail.com</span>
                  </a>
                </div>

                {/* Divider between contact and social (Visible when on same row) */}
                <div className="hidden md:block w-[1px] h-5 bg-zinc-700/60 shrink-0"></div>

                {/* Social Icons Row (Wraps to next line if space is constrained) */}
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full bg-zinc-800/90 border border-zinc-700/70 text-zinc-300 hover:text-[#efb10a] hover:border-[#efb10a] hover:bg-[#efb10a]/10 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

              </div>
            </div>

            {/* Premium Golden CTA Button */}
            <div className="pt-4 w-full sm:w-auto">
              <a
                href="mailto:mohimsingla@gmail.com"
                className="relative inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-black bg-gradient-to-r from-[#efb10a] via-amber-400 to-[#efb10a] rounded-full shadow-[0_0_20px_rgba(239,177,10,0.35)] hover:shadow-[0_0_30px_rgba(239,177,10,0.6)] hover:scale-[1.03] transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Get In Touch
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
