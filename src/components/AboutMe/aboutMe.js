import React from 'react';
import './aboutMe.css';
import portrait from '../../assets/portrait_dec23.jpg';

const AboutMe = () => {
	return (
		<section id="aboutMe">
			<img className="portrait" src={portrait} />
			<div className="rightSide">
				<div className="aboutMeTitle">
					<h1>About Me</h1>
				</div>
				<p className="aboutMeText">
					I am currently in my third year at Stevens Institute of
					Technology pursuing a Bachelors of Engineering in Software
					Engineering. I am eager to apply what I have learned as well
					as develop new skills in challenging engineering roles. This
					past summer I worked with{' '}
					<a
						class="inlineLink"
						href="https://www.stevens.edu/profile/ealomar"
						target="_blank"
					>
						Professor AlOmar
					</a>{' '}
					on the AntiCopyPaster tool for Intellij.
					<br />
					My programming skills include Java, Python, HTML/CSS,
					Javascript, C++, React.js, and SQL.
					<br />A few of my other interests besides programming
					include playing chess, skiing, and exercising!
				</p>
			</div>
		</section>
	);
};
export default AboutMe;
