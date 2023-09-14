import React from 'react'
import './projects.css'
import ppp from '../../assets/PPPgraphs.PNG'
import acp from '../../assets/ACP_UI.PNG'
import tictaktoe from '../../assets/tictaktoe.jpg'


const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectsTitle">Portfolio</h2>
        <div className="projectsContainer">
            <div class="project">
                <h2><a class="projectHeader" href="https://github.com/ALEEF02/PingPongPage" target="_blank">Ping Pong Tracking Website</a></h2>
                <img src={ppp} alt="PingPongPage"></img>
                <p>A website that allows users to create an account with their stevens email and log ping pong games against each other. All games are stored in an SQL databas and players are given an elo rating via a Java backend. Data visualization per player is also available via google charts.</p>
            </div>
            <div class="project">
                <h2>Project 1</h2>
                <img src={acp} alt="AntiCopyPaster"></img>
                <p>Short description of Project 1.</p>
            </div>
            <div class="project">
                <h2>Project 1</h2>
                <img src={tictaktoe} alt="TikTakToe"></img>
                <p>Short description of Project 1.</p>
            </div>
        </div>
    </section>
  )
}
export default Projects
