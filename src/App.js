import './App.css';
import React, { useRef, useEffect, useState }from 'react';
import Navbar from './Components/navbar';
import ImpLinks from "./Components/impLinks";
import MyImage from "./Components/myImage";
import MyName from "./Components/myName";
import Languages from "./Components/languages";
import Tools from "./Components/tools";
import Databases from "./Components/databases";
import Frameworks from "./Components/frameworks";


function App() {

  const [navHeader, setNavHeader] = useState("");
  const [navItems, setNavItems] = useState([]);
  const [profileLinks, setProfileLinks] = useState({})
  const [personName, setPersonName] = useState("");
  const [personRoles, setPersonRoles] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [tools, setTools] = useState([]);
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    setNavHeader("Portfolio");
    setNavItems(["Skills", "Projects", "Experience", "Education", "About"]);
    setProfileLinks({
      "GitHub" : "https://github.com/jollypatel25",
      "LinkedIn" : "https://www.linkedin.com/in/jollypatel25",
      "LeetCode" : "https://leetcode.com/u/Jolly_Patel/"
    })
    setPersonName("Jolly Patel1");
    setPersonRoles(["Web Developer", "Android Developer", "Coding Enthusiast"])
    setLanguages(["JAVA","Python","PHP","C++"]);
    setDatabases(["My SQL", "MongoDB"]);
    setTools(["Android Studio", "Visual Studio"]);
    setFrameworks(["ReactJS"]);
  }, []);

  return (
    <div className="app">
      <Navbar items={navItems} header={navHeader}/>
      <div className="main-content">
        
        <div className="profile-name-image-container">
          <MyImage/>
          <div className="link-name">
            <ImpLinks profileLinks={profileLinks}/>
            <MyName name={personName} roles={personRoles}/>
          </div>
        </div>
        
        <div className="skills">
          <div className="languages">
            <Languages name={languages}/>
          </div>
          <div className="databases">
            <Databases name={databases}/>
          </div>
          <div className="frameworks">
            <Frameworks name={frameworks}/>
          </div>
          <div className="tools">
            <Tools name={tools}/>
          </div>
        </div>


        {/* <div className="aboutMe">Currently, I'm pursuing a Bachelor's degree in Computer Engineering, 
                  where I'm immersing myself in the ever-evolving world of technology. 
                  With a keen eye on emerging trends and a thirst for knowledge, I'm constantly seeking 
                  opportunities to broaden my skill set and contribute meaningfully to collaborative projects. 
                  As a passionate and forward-thinking developer, I'm driven by innovation and inspired by 
                  the potential of technology to shape the future.</div> */}



        {/* <div className="education">
          <div className="header-education">Education</div>
          <div className="content-education">
            <div className="edu-btech"></div>
            <div className="edu-diploma"></div>
            <div className="edu-ssc"></div>
          </div>
        </div> */}

        {/* <div className="experience">
          <div className="header-experience">Experience</div>
          <div className="content-experience">
            <div className="internships"></div>
            <div className="jobs"></div>
          </div>
        </div> */}

        {/* <div className="projects">
          <div className="header-projects">Projects</div>
          <div className="content-projetcs">

          </div>
        </div> */}

        {/* <div className="contactMe">
          <div className="header-contact-me">Contact Me</div>
          <div className="content-contact-me">

          </div>
        </div> */}

        {/* <footer className="footer">

        </footer> */}
      </div>
    </div>
  );
}

export default App;