import React from "react";
import SkillBox from "./SkillBox/skillBox";

export default function Skills({ skills }) {

  return (
    <div className="bg-gradient-to-br from-[#000] to-[#272525d2] p-0">
      <h1 className="text-center text-6xl text-white mb-12 font-cursive">
        &#60;<span className="text-[#efb10a]">My</span> Skills &#47;&#62;
      </h1>
      <div className="flex flex-wrap justify-around gap-8 px-2">
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
