import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Career.css'
import car from '../Images/careerform.png'

const CareerPage = () => {
  return (
    <>
    <Header/>
    <div id='career'>
        <h2> <button>Download The Application Form</button> </h2>
        <img src={car}/>
    </div>
    <Footer/>
    </>
  )
}

export default CareerPage