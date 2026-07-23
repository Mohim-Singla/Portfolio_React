import React from 'react';

const SkillBox = ({ imageSrc, altText, title }) => {
  const isDarkIcon = title === 'Kafka' || title === 'ExpressJS' || title === 'Flask';

  return (
    <div className="p-2 sm:p-3 text-center bg-[#1a1a1a] text-white rounded-md shadow-sm hover:bg-white hover:text-black transition-all duration-300 flex flex-col items-center justify-center min-w-[90px] sm:min-w-[100px] md:min-w-[110px] flex-1 max-w-[140px] group">
      <img
        className={`h-8 sm:h-10 md:h-12 mb-1.5 object-contain transition-all duration-300 ${
          isDarkIcon ? 'filter invert brightness-200 group-hover:invert-0 group-hover:brightness-100' : ''
        }`}
        src={imageSrc}
        alt={altText}
      />
      <h3 className="text-[10px] sm:text-xs md:text-xs font-semibold uppercase tracking-tight line-clamp-1">{title}</h3>
    </div>
  );
};

export default SkillBox;
