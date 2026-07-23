import React from "react";
import SkillBox from "./SkillBox/skillBox";

export default function Skills({ skills }) {

  return (
    <div className="bg-gradient-to-t from-[#000] to-[#272525d2] min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 sm:px-12 py-10 sm:py-16 scroll-mt-16" id="skills">
      <h1 className="text-center text-4xl sm:text-5xl text-white mb-8 sm:mb-12 font-cursive pt-4">
        &#60;<span className="text-[#efb10a]">My</span> Skills &#47;&#62;
      </h1>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-7xl mx-auto px-2">
        {skills.map((skill, index) => (
          <SkillBox
            key={index}
            imageSrc={skill.imageSrc}
            altText={skill.altText}
            title={skill.title}
          />
        ))}
      </div>
    </div>
  );
}
