import React from "react";
import "./skills.css"; // Import Tailwind CSS

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-[#272525d2] to-[#000] p-6">
      <h1 className="text-center text-6xl text-white mb-12 font-cursive">
        &#60;<span className="text-[#efb10a]">My</span> Skills &#47;&#62;
      </h1>
      <div className="flex flex-wrap justify-around gap-8 px-2">
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
          <h3 className="text-2xl font-normal uppercase">C++</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
          <h3 className="text-2xl font-normal uppercase">HTML</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
          <h3 className="text-2xl font-normal uppercase">CSS</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
          <h3 className="text-2xl font-normal uppercase">React.js</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <h3 className="text-2xl font-normal uppercase">JavaScript</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <h3 className="text-2xl font-normal uppercase">Git</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          <h3 className="text-2xl font-normal uppercase">Docker</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          <h3 className="text-2xl font-normal uppercase">MySQL</h3>
        </div>
        <div className="p-8 text-center bg-[#1a1a1a] text-white rounded-lg shadow-md max-w-[25%] min-w-[15%] flex-1 hover:bg-white hover:text-black transition-colors duration-300 flex flex-col items-center">
          <img className="h-28 mb-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" alt="Cucumber" />
          <h3 className="text-2xl font-normal uppercase">Cucumber</h3>
        </div>
      </div>
    </div>
  );
}
