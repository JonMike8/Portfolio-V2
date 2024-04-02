import React from 'react';
import './projects.css';
import ProjectElement from './ProjectElement';
import { loadProjects } from './projectsList';
const Projects = () => {
	const projectsList = loadProjects();
  
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
