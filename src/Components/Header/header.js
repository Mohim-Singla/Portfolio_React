import React from 'react';
import './header.css';

export default function Header({ navbarOpen, setNavbarOpen }) {
  return (
    <div className={`fixed top-0 left-0 w-full ${navbarOpen ? 'bg-purple-800 text-orange-500' : 'bg-black text-white'} transition-colors duration-1000 z-50 shadow-md`} id='header'>
      <div className='flex items-center justify-between h-16 px-4 sm:px-8 max-w-7xl mx-auto'>
        <div className='flex items-center'>
          <p className='text-xl sm:text-2xl font-extrabold font-Comic-Neue'>&#60;<span className="text-[#efb10a]">Port</span>folio &#47;&#62;</p>
        </div>
        <div className='flex items-center'>
          <p className='text-xl sm:text-2xl font-extrabold font-Ms-Madi'>Mohim Singla</p>
        </div>
        <div className='flex items-center'>
          <div 
            className='flex flex-col items-center cursor-pointer p-2'
            onClick={() => setNavbarOpen && setNavbarOpen(!navbarOpen)}
          >
            <span className={`block w-7 h-0.5 bg-white transition-colors duration-300 ${navbarOpen ? 'bg-orange-500' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-white mt-1 transition-colors duration-300 ${navbarOpen ? 'bg-orange-500' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-white mt-1 transition-colors duration-300 ${navbarOpen ? 'bg-orange-500' : ''}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
