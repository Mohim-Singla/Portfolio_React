import React from 'react';
import './header.css';

export default function Header({ navbarOpen, setNavbarOpen, onHomeClick, onNavToSection }) {
  const navItems = [
    { label: 'Home', href: '#Intro' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'About & Contact', href: '#about' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setNavbarOpen && setNavbarOpen(false);
    window.history.pushState(null, '', href);
    if (href === '#Intro') {
      if (onHomeClick) {
        onHomeClick();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (onNavToSection) {
        onNavToSection(href);
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full ${navbarOpen ? 'bg-zinc-950/95 text-orange-500' : 'bg-black/90 text-white'} transition-colors duration-500 z-50 shadow-lg backdrop-blur-md border-b border-zinc-800/80`} id='header'>
        <div className='relative flex items-center justify-between h-16 px-4 sm:px-8 max-w-7xl mx-auto'>
          <div className='flex items-center z-10'>
            <a href="#Intro" onClick={(e) => handleNavClick(e, '#Intro')} className='text-xl sm:text-2xl font-extrabold font-Comic-Neue hover:opacity-90 transition-opacity'>
              &#60;<span className="text-[#efb10a]">Port</span>folio &#47;&#62;
            </a>
          </div>
          <div className='absolute left-1/2 -translate-x-1/2 flex items-center'>
            <p className='text-xl sm:text-2xl font-extrabold font-Ms-Madi pointer-events-none text-zinc-100'>Mohim Singla</p>
          </div>
          <div className='flex items-center z-10'>
            <button 
              aria-label="Toggle Navigation Menu"
              className='flex flex-col items-center justify-center w-10 h-10 cursor-pointer rounded-lg hover:bg-zinc-800/50 transition-colors focus:outline-none'
              onClick={() => setNavbarOpen && setNavbarOpen(!navbarOpen)}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                <span className={`block h-0.5 w-6 bg-[#efb10a] rounded-full transition-all duration-300 transform origin-center ${navbarOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-[#efb10a] rounded-full transition-all duration-300 ${navbarOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-[#efb10a] rounded-full transition-all duration-300 transform origin-center ${navbarOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Dropdown Navigation Menu */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${navbarOpen ? 'max-h-64 opacity-100 border-t border-zinc-800/60' : 'max-h-0 opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 bg-zinc-950/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-semibold text-zinc-200 hover:text-[#efb10a] transition-colors py-2 px-4 rounded-lg hover:bg-zinc-900/60 w-full sm:w-auto text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop Overlay when menu is open */}
      {navbarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={() => setNavbarOpen && setNavbarOpen(false)}
        />
      )}
    </>
  );
}

