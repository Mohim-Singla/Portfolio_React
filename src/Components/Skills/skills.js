import React from "react";
import SkillBox from "./SkillBox/skillBox";

export default function Skills({ skills }) {

  return (
    <div className="bg-gradient-to-t from-[#000] to-[#272525d2] p-4 sm:p-8" id="skills">
      <h1 className="text-center text-3xl sm:text-5xl text-white mb-6 sm:mb-10 font-cursive">
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
