import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Elearning.css'

const ElearnPage = () => {
    return (
        <>
        <Header/>
            <div id="textp2">

                <div id="abo-head">
                    <h2>NPTEL WITH LOCAL CHAPTER</h2>
                </div>
                <div id="abo-text">
                    <ul type="square">
                        <li> Nptel with local chapter – <a href="#">Click to View</a></li>
                    </ul>
                </div>
                <div id="vis-head">
                    <h2>PROFESSTIONAL LEARNING COMMUNITY</h2>
                </div>
                <div id="vis-text">
                    <ul type="square">
                        <li> Video Peer review form – <a href="#">Click to View</a></li>
                    </ul>
                </div>
                <div id="mis-head">
                    <h2>LMS</h2>
                </div>
                <div id="mis-text">
                    <p>
                        WIT Solapur, uses open source learning management system (LMS) Moodle to manage day to day
                        academic activities of various departments of the institute. Moodle is available 24×7 internally
                        on internal network addresses 192.168.1.78 (for CSE, IT, ExTC, ELN), 192.168.1.77 (Civil and
                        MECH) to all students and faculty of the institute. Additionally, Moodle is also accessible
                        externally through public network address. <br /> <br />
                        Moodle platform is effectively used in following activities for innovations in teaching-learning
                        along with conventional assessment modes. <br /> <br />
                    </p>

                    <ol>
                        <li>Online assignment submissions and evaluations.</li> <br />
                        <li>Online examinations and Internal Continuous assessment (ICA).</li>
                        <li>Dissemination of study material.</li> <br />
                        <li>Assessments of students in various intra-inter department competitions and mock competitive exams.</li> <br/>
                            <li>Soliciting feedback from students.</li> <br />
                            <li>Self-paced study portal for advanced and slow learners.</li> <br />
                    </ol>
                </div>



            </div>
        <Footer/>    
        </>
    )
}

export default ElearnPage