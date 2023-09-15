import React from 'react'
import './navbar.css'
//import {Link} from 'react-scroll'

const Navbar = () =>{
    return(
        <nav className="navbar">
            <a className="nav-item" href="#intro">Home</a>
            <a className="nav-item" href="#aboutMe">About</a>
            <a className="nav-item" href="#projects">Projects</a>
            <a className="nav-item" href="#contact">Contact</a>
        </nav>
    )
}
export default Navbar
