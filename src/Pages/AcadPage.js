import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Acad.css'
const AcadPage = () => {
  return (
    <>
    <Header/>
    <div id="content">
                <div id="aca-head">
                    <h2>Academic calender</h2>
                </div>
                <div id="aca-text">
                    <ul type="square">
                        <li>Academic Calendar (2021-2022) <a href="#">Download (PDF)</a></li>
                        <li>Academic Calendar (2022-2023) <a href="#">Download (PDF)</a></li>
                        <li>Academic Calendar (2023-2024) <a href="#">Download (PDF)</a></li>

                    </ul>
                </div>
                <div id="exa-head">
                    <h2>Exam Timetable</h2>
                </div>
                <div id="exa-text">
                    <ul type="square">
                        <li>FY B.Tech Sem-I (2021-22) - <a href="#"> Click to View </a></li>
                        <li>FY B.Tech Sem-II (2021-22) – <a href="#"> Click to View </a></li>
                        <li>M. Tech Part-l Sem-l (2021-221) – <a href="#"> Click to View </a></li>
                        <li>M. Tech Part-1 Sem-II (2021-221) – <a href="#"> Click to View </a></li>

                    </ul>
                </div>
                <div id="res-head">
                    <h2>Research</h2>
                </div>
                <div id="res-text">
                    <ol>
                        <li>Research Policy <a href="#"> Download (PDF) </a></li>
                        <li>Research Code of Ethics <a href="#"> Download (PDF) </a></li>
                        <li>Research Publications <a href="#"> Download (PDF) </a></li>
                        <li>Research Projects <a href="#"> Download (PDF) </a></li>
                        <li>Patents <a href="#"> Download (PDF) </a></li>
                        <li>Research Scholars <a href="#"> Download (PDF) </a></li>

                    </ol>
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default AcadPage