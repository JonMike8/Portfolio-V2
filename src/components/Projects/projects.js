import React from 'react';
import './projects.css';
import ppp from '../../assets/PPPgraphs.PNG';
import acp from '../../assets/ACP_UI.PNG';
import tictaktoe from '../../assets/tictaktoe.jpg';
import tensorflow from '../../assets/tensorflow-graphs.JPG'
import ProjectElement from './ProjectElement';
import projectDescriptions from './ProjectDescriptions';
//import { Link } from 'react-router-dom'; 

const Projects = () => {
  const projectsList = [
    {
      title: 'Ping Pong Tracking Website',
      image: ppp, 
      link: 'https://github.com/ALEEF02/PingPongPage',
      desc: projectDescriptions[0],
    },
    {
      title: 'Anti-Copy-Paster Undergraduate Rsearch',
      image: acp, 
      link: 'https://github.com/refactorings/anti-copy-paster',
      desc: projectDescriptions[1],
    },
    {
      title: 'Tensorflow Image Classifier',
      image: tensorflow, 
      link: 'https://github.com/JonMike8/Cat-image-classifier',      
      desc: projectDescriptions[2],
    },
    {
      title: 'Tic-Tak-Toe App',
      image: tictaktoe, 
      link: 'https://github.com/JonMike8/Tic-Tac-Toe-APP-in-react-native-',
      desc: projectDescriptions[3],
    }
  ];
  
  return (
    <section id="projects">
      <h2 className="projectsTitle">Portfolio</h2>
      <div className="projectsContainer">
        {projectsList.map((project, index) => (
          <ProjectElement
            key={index}
            title={project.title}
            link={project.link}
            image={project.image}
            desc={project.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
