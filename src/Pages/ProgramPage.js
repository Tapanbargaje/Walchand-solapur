import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import civilimg from '../Images/civil.jpg'
import cs from '../Images/cs.jpg'
import mech from '../Images/mech.jpg'
import it from '../Images/it.jpg'
import entc from '../Images/entc.jpg'
import ecs from '../Images/e&cs.jpg'
import './Program.css'

const ProgramPage = () => {
  return (
    <>
    <Header/>
    <div id="bottom">
                <div id="bot-up">
                    <h1>
                        Our Programs
                    </h1>
                </div>
                <div id="bot-down">
                    <div class="card">

                        <img src={civilimg} alt=""/>
                        <h3>Cvil </h3>
                        <h3>Engineering</h3>
                        <Link to="/civil_pg" class="btn">Details</Link>
                    </div>
                    <div class="card">
                        <img src={cs} alt=""/>
                        <h3>Computer Science and</h3>
                        <h3>Engineering</h3>
                        <Link to="/cs_pg" class="btn">Details</Link>
                    </div>
                    <div class="card">
                        <img src={ecs} alt=""/>
                        <h3>Electronics and</h3>
                        <h3>Computer Engineering</h3>
                        <Link to="/ecs_pg" class="btn">Details</Link>
                    </div>
                    <div class="card">
                        <img src={entc} alt=""/>
                        <h3>Electronics and</h3>
                        <h3>Telecommunication Engg.</h3>
                        <Link to="/entc_pg" class="btn">Details</Link>
                    </div>
                    <div class="card">
                        <img src={it} alt=""/>
                        <h3>Information</h3>
                        <h3>Technology</h3>
                        <Link to="/it_pg" class="btn">Details</Link>
                    </div>
                    <div class="card">
                        <img src={mech} alt=""/>
                        <h3>Mechanical and</h3>
                        <h3>Automation</h3>
                        <Link to="/mech_pg" class="btn">Details</Link>
                    </div>
                </div>
            </div>
    <Footer/>            
    </>
  )
}

export default ProgramPage