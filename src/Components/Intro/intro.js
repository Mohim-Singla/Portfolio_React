import React from 'react';
import './intro.css';
import profilePhoto from './mohim2.png';

export default function Intro({ onButtonClick }) {
  return (
    <div
      className="bg-gradient-to-t from-[#272525d2] to-[#000] w-full text-white flex flex-col md:flex-row items-center md:items-end justify-between min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] px-4 sm:px-8 pt-0 pb-2 md:py-0 relative overflow-hidden gap-1 sm:gap-4 md:gap-12"
      id="Intro"
    >
      <div className="w-full h-[65vh] md:h-full md:w-1/2 flex items-end justify-center pt-0 overflow-hidden">
        <img
          src={profilePhoto}
          alt="Mohim Singla"
          className="h-full max-h-[65vh] md:max-h-[80vh] lg:max-h-[calc(100vh-4rem)] w-auto object-contain block filter hover:scale-[1.02] transition-all duration-500"
          style={{ marginBottom: 0, display: 'block' }}
        />
      </div>
      <div className="w-full h-[25vh] md:h-full md:w-1/2 flex items-center justify-center text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl italic font-square-peg px-2 sm:px-4 py-4 md:py-10 my-auto">
        <p className="leading-snug">"Keep your thoughts high above the SKY, keeping your Foot on the Ground."</p>
      </div>
    </div>
  );
}
