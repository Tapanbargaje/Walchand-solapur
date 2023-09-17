import React from 'react'
import './Header.css'
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div id="header">
            <div id="hleft">
                <img src={logo} alt="logo"/>
                <Link to="/"><h2>WIT</h2></Link>
            </div>
            <div id="hright">
                <h4><Link to="/">Home</Link></h4>
                <h4><Link to="/about">About Us</Link></h4>
                <h4><Link to="/acad">Academics</Link></h4>
                <h4><Link to="/admissions">Admissions</Link></h4>
                <h4><Link to="/program">Programs</Link></h4>
                <h4><Link to="/contact">Contact Us</Link> </h4>
                <Link to="/menu"><i class="ri-menu-line"></i></Link>
            </div>
        </div>
        <div id="hnav">
            <h4><Link to="/accreditation">Accreditation</Link></h4>
            <h4><Link to="/club">Clubs</Link></h4>
            <h4><Link to="/career">Career</Link></h4>
            <h4><Link to="/E-learning">E-Learning</Link></h4>
            <h4><a href="#">Imp Links</a></h4>
            <h4><a href="#">Take a Tour</a></h4>
            <h4><Link to="/placements">Placements</Link></h4>
            <h4><a href="https://witsolapur.org/witchar-2k23/" target='_blank'>WITchar 2023</a></h4>
        </div>
    </>
  )
}

export default Header