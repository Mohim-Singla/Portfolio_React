import React, { useState } from "react"
import './app.scss'
import Header from "./Components/Header/header";
import Intro from "./Components/Intro/intro"
import Experience from "./Components/Experience/experience";
import Menu from "./Components/Menu/Menu";
import Skills from "./Components/Skills/skills";
function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let cardInfo = [
    {
      "Company": "Unschool",
      "Profile": "Marketing and Sales(Intern)",
      "Start": "May 2020",
      "End": "Oct 2020",
      "Location": "Hyderabad, India",
      "Description": ["Managing a team of 300+ interns generating a revenue of INR 20 Lakh+", "Head of the Campaigns.","Managing Interviews and Hiring team and conducting Induction and Training of newly joined interns."],
      "Banner": "url('https://api.startupindia.gov.in/sih/api/file/user/image/Startup?fileName=daef4898-8e58-4cb1-826e-21361de1f15a.png')",
      "ButtonText": "Letter of Recommendation",
    },
    {
      "Company": "Nucleus Software Exports",
      "Profile": "Software Developer Intern",
      "Start": "Jan 2022",
      "End": "June 2022",
      "Location": "Noida, India",
      "Description": ["SVN to GitLab Migration automation script.","Leveraging CI/CD architecture for automating environment creation and deployment."],
      "Banner": "url('https://fxconsulting.in/wp-content/uploads/2018/11/Nucleus-Software-Exports.jpg')",
      "ButtonText": "Visit Webpage",
    }
] 
  return (
    <>
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <div className="app">
        <Intro />
        <Experience cardInfo={cardInfo}/>
        <Skills />
      </div>
    </>
  );
}

export default App;
