import React from 'react';

const SkillBox = ({ imageSrc, altText, title }) => {
  return (
    <div className="p-6 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)] hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center justify-center">
      <img className="h-20 sm:h-24 md:h-28 mb-4 object-contain" src={imageSrc} alt={altText} />
      <h3 className="text-xl sm:text-2xl font-normal uppercase">{title}</h3>
    </div>
  );
};

export default SkillBox;
