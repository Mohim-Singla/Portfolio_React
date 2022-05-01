import React from "react";
import "./skills.scss";

export default function Skills() {
  return (
    <div class="skills">
      <h1 class="heading">&#60;<span>My</span> Skills &#47;&#62;</h1>
      <div class="box-container">
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="" />
          <h3>C++</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" />
          <h3>HTML</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
          <h3>CSS</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          <h3>React.js</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
          <h3>javascript</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="" />
          <h3>Docker</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="" />
          <h3>MySql</h3>
        </div>
        <div class="box">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" alt="" />
          <h3>Cucumber</h3>
        </div>
      </div>
    </div>
  );
}
