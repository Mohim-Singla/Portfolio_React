import React from 'react';
import './intro.css';
import profilePhoto from './mohim2.png';

export default function Intro({ onButtonClick }) {
  return (
    <div
      className="bg-gradient-to-t from-[#272525d2] to-[#000] w-full text-white flex items-end justify-center h-[calc(100vh-4rem)] px-4 sm:px-8 pt-4 pb-0 relative overflow-hidden"
      id="Intro"
    >
      <div className="flex flex-col md:flex-row justify-around items-end w-full max-w-6xl h-full gap-8">
        <div className="w-full md:w-1/2 flex items-end justify-center h-full overflow-hidden">
          <img
            src={profilePhoto}
            alt="Mohim Singla"
            className="max-h-full max-w-full w-auto h-auto object-contain block filter grayscale hover:grayscale-0 transition-all duration-500"
            style={{ marginBottom: 0, display: 'block' }}
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left text-3xl sm:text-4xl md:text-5xl italic font-square-peg px-4 self-center py-8">
          <p>"Keep your thoughts high above the SKY, keeping your Foot on the Ground."</p>
        </div>
      </div>
    </div>
  );
}
