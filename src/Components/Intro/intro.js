import React from 'react';
import './intro.css'; // Optional: Use this for any custom CSS or Tailwind extensions
import momo from './mohim2.png';

export default function Intro() {
  return (
    <div className="bg-gradient-to-br from-gray-990 via-gray-300 to-black w-full text-white" id="Intro">
      <div className="flex justify-around items-center flex-wrap p-4">
        <div className="w-full max-w-screen-md">
          <img 
            src={momo} 
            alt="momo" 
            className="w-full max-h-[calc(100vh-70px)] object-cover grayscale-10"
          />
        </div>
        <div className="flex-1 flex-shrink-0 w-full max-w-md p-4 text-center text-4xl italic font-square-peg">
          <p>"Keep your thoughts high above the SKY, keeping your Foot on the Ground."</p>
        </div>
      </div>
    </div>
  );
}
