import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'
const ContactPage = () => {
  return (
    <>
      <Header />
        <div id="content">
          <div id="cont">
            <h2>CONTACT US</h2>
          </div>
          <div id="desc">
            <h3>Walchand Institute of Technology, Solapur <br />
            P.B.No.634, Walchand Hirachand Marg, <br />
            Ashok Chowk, Solapur - 413006 (Maharashtra) <br />
            <strong> Phone : (0217)2652700, 2653040</strong> <br />
            Email : principal@witsolapur.org
            </h3>
          </div>
          <div id="loca">
            <h2>LOCATE US ON GOOGLE MAP</h2>
          </div>
          <div id="map">
            <iframe title='map' class="map-des"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.6103264076896!2d75.9228126!3d17.6686056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da42cf5b6333%3A0xce43e421c82afed7!2sWalchand%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1693721372363!5m2!1sen!2sin"
            width="900" height="400" 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div id="map2">
            <iframe title='map1' class="map-des" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.6103264076896!2d75.9228126!3d17.6686056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da42cf5b6333%3A0xce43e421c82afed7!2sWalchand%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1693723411672!5m2!1sen!2sin" 
            width="300" height="400"  
            allowFullScreen loading="lazy" 
            ReferrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      <Footer/>
    </>

  )
}

export default ContactPage