import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Admissions.css'

const AdmissionsPage = () => {
  return (
    <>
    <Header/>
    <div id="content">
                <div id="fee-head">
                    <h2>FEE Structure</h2>
                </div>
                <div id="fee-text">
                    <h3>FEE Structure:- <a href="#">Download-PDF</a></h3>
                </div>
                <div id="fir-head">
                    <h2>First Year Admission</h2>
                </div>
                <div id="fir-text">
                    <ul type="square">
                        <li>Advertisement for Institute Level And Against CAP Vacancy –<a href="#"> Click to View </a></li>
                        <li>Provisional Merit List for Institute Level /Against CAP Vacancy-<a href="#"> Click to View </a></li>
                    </ul>
                </div>
                <div id="sec-head">
                    <h2>S.Y. to Final Year B. Tech. A.Y. 2023-2024</h2>
                </div>
                <div id="sec-text">
                    <h3>Admission to S.Y. to Final Year B. Tech. (All Branches) A.Y. 2023-2024 :-<a href="#">Download-PDF</a></h3>
                </div>
                <div id="gui-head">
                    <h2>Guidlines for FEE through SBI collect</h2>
                </div>
                <div id="gui-text">
                    <h3>Procedure For Payment of Fees using SBI Collect :-<a href="#">Download-PDF</a></h3>
                </div>
                <div id="mte-head">
                    <h2>M.TECH 2023-24 Admission Vacant Seats</h2>
                </div>
                <div id="mte-text">
                    <h3><pre>Program Name                             Vacant Seats</pre></h3>
                    <ol>
                        <li><pre>Computer Science And Engineering                      02</pre></li>
                        <li><pre>Electronics Engineering                               02</pre></li>
                        <li><pre>Design Engineering                                    04</pre></li>
                        <li><pre>Structural Engineering                                01</pre></li>
                    </ol>
                </div>
        
                
            </div>
            <Footer/>
    </>
  )
}

export default AdmissionsPage