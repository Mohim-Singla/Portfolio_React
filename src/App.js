import React, { useState } from 'react';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import Skills from './Components/Skills/skills';
import utils from './utils';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <div className="flex flex-col min-h-screen max-h-screen bg-black text-white pt-16">
        <div className="flex-1">
          <Intro />
          <Skills skills={utils.Constants.SkillSet} />
        </div>
      </div>
    </>
  );
}

export default App;
