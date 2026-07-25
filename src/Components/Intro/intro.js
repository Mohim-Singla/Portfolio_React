import React from 'react';
import './intro.css';
import profilePhoto from './mohim2.png';

export default function Intro({ onButtonClick }) {
  return (
    <div
      className="intro-container bg-gradient-to-t from-[#272525d2] to-[#000] w-full text-white flex flex-col md:flex-row items-center md:items-end justify-end md:justify-between px-4 sm:px-8 relative overflow-hidden scroll-mt-16"
      id="Intro"
    >
      <div className="w-full md:w-1/2 md:h-full flex items-end justify-center overflow-hidden intro-image-section">
        <img
          src={profilePhoto}
          alt="Mohim Singla"
          className="max-h-full max-w-full w-auto h-auto object-contain block filter hover:scale-[1.02] transition-all duration-500"
        />
      </div>
      <div className="w-full md:w-1/2 md:h-full flex items-center justify-center text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl italic font-square-peg px-2 sm:px-4 intro-text-section">
        <p className="leading-snug">"Keep your thoughts high above the SKY, keeping your Foot on the Ground."</p>
      </div>

      {/* Clickable Bouncing Down Arrow */}
      <button
        onClick={onButtonClick}
        aria-label="Scroll to Skills"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full text-[#efb10a] hover:text-white hover:bg-[#efb10a]/20 transition-all duration-300 animate-bounce cursor-pointer focus:outline-none"
      >
        <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
