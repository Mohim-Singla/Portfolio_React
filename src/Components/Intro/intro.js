import React from 'react';
import './intro.css';
import momo from './mohim2.png';

export default function Intro({ onButtonClick }) {
  return (
    <div className="bg-gradient-to-t from-[#272525d2] to-[#000] p-6 pb-0 w-full text-white flex items-center justify-center min-h-full" id="Intro">
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div className="w-full">
          <img 
            src={momo} 
            alt="momo" 
            className="w-full max-h-full min-h-full object-cover grayscale-100"
          />
        </div>
        <div className="w-full p-4 text-center text-5xl italic font-square-peg">
          <p>"Keep your thoughts high above the SKY, keeping your Foot on the Ground."</p>
        </div>
      </div>
    </div>
  );
}
