import Navbar from "./components/IntroPage/navbar.js"
import Intro from "./components/IntroPage/header.js"
import ParticlesBackground from "./components/Background/ParticlesBackground.js";
import AboutMe from "./components/AboutMe/aboutMe.js"
import Projects from "./components/Projects/projects.js"
import {Rout, BrowserRouter as Router, Routes} from 'react'


function App() {
    return (
      <>
        <Navbar />
        <Intro />
        <ParticlesBackground /> 
        <AboutMe />
        <Projects/>
      </>
    );
  }
export default App;