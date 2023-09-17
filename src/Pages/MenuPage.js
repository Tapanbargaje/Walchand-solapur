import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Menu.css'

const MenuPage = () => {
    return (
        <>
            <Header />
            <div id="menupg">

                <h4><Link to="/">Home</Link></h4>
                <h4><Link to="/about">About Us</Link></h4>
                <h4><Link to="/acad">Academics</Link></h4>
                <h4><Link to="/admissions">Admissions</Link></h4>
                <h4><Link to="/program">Programs</Link></h4>
                <h4><Link to="/contact">Contact Us</Link> </h4>

                <h4><a href="#">Alumni</a></h4>
                <h4><a href="#">Best Practices</a></h4>
                <h4><a href="#">Best Practices</a></h4>
                <h4><a href="#">Career</a></h4>
                <h4><Link to="/accreditation">Accreditation</Link></h4>
                <h4><Link to="/club">Clubs</Link></h4>
                <h4><Link to="/career">Career</Link></h4>
                <h4><Link to="/E-learning">E-Learning</Link></h4>
                <h4><Link to="/placements">Placements</Link></h4>

                <h4><a href="#">WITchar 2023</a></h4>
            </div >
            <Footer />
        </>
    )
}

export default MenuPage