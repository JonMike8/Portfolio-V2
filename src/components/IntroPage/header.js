import React from 'react';
import './header.css';
import resume from '../../assets/Jonathan Memoli Resume 4.2.24.pdf';

//MAKE SURE TO ADD RESUME TO ASSETS AND IMPORT IT
const Intro = () => {
	return (
		<section id="intro">
			<div className="introContent">
				<span className="hello">Hello</span>
				<span className="introText">
					I'm <span className="introName">Jonathan</span>
					<br />
					Software Engineer
				</span>
				<p className="description">
					I'm currently an undergraduate Student at Stevens Institute
					of Technology with both frontend and backend development
					experience.
					<br />
					Connect with me here:
				</p>
				<div class="socialIcons">
					<ul class="socialIcons-list">
						<li>
							<a class="icon" href={resume} target="_blank">
								<ion-icon name="newspaper-outline"></ion-icon>
							</a>
						</li>
						<li>
							<a
								class="icon"
								href="https://github.com/JonMike8"
								target="_blank"
							>
								<ion-icon name="logo-github"></ion-icon>
							</a>
						</li>
						<li>
							<a
								class="icon"
								href="https://www.linkedin.com/in/jonathan-m-memoli/"
								target="_blank"
							>
								<ion-icon name="logo-linkedin"></ion-icon>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
export default Intro;
