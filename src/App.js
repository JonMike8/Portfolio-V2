import Navbar from "./components/IntroPage/navbar.js"
import Intro from "./components/IntroPage/header.js"
import ParticlesBackground from "./components/Background/ParticlesBackground.js";
import AboutMe from "./components/AboutMe/aboutMe.js"
import Projects from "./components/Projects/projects.js"
import Contact from "./components/ContactForm/contact.js";
import {Rout, BrowserRouter as Router, Routes} from 'react'


function App() {
    return (
      <>
        <Navbar />
        <div id='responsiveArea'>
          <Intro />
          <ParticlesBackground /> 
        </div>
        <AboutMe />
        <Projects/>
        <Contact />
      </>
    );
  }
export default App;