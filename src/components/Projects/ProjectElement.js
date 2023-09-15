import React from 'react'
//import {Link} from 'react-router-dom'
import './projects.css'
//        <h2><a class="projectHeader" href={link} target="_blank">{title}</a></h2>

const ProjectElement = ({image, title, link, desc}) => {
  return (
    <div className="project">
        <h2><a className="projectHeader" href={link} target="_blank">{title}</a></h2>
         <img src={image} alt="PingPongPage"></img>
         <p>{desc}</p>
    </div>
  )
}
export default ProjectElement
