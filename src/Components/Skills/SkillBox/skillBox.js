import React from 'react';

const SkillBox = ({ imageSrc, altText, title }) => {
  return (
    <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
      <img className="h-28 mb-4" src={imageSrc} alt={altText} />
      <h3 className="text-2xl font-normal uppercase">{title}</h3>
    </div>
  );
};

export default SkillBox;
