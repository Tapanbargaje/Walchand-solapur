import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import google from '../Images/google-art-club.png'
import './Club.css'

const ClubsPage = () => {
    return (
        <>
        <Header/>
            <div id="club">
                <div id="art-head">
                    <h2>ART CLUB</h2>

                </div>
                <div id="art-text">
                    <h3>Academic Report</h3>
                    <p>

                        The Ancient Amusements Art Exhibition is a captivating showcase of art works centered around the
                        theme of ancient civilizations, iconic landmarks, and historical sites. This exhibition has been
                        organized in your and encompasses diverse elements ranging from ancient cities like Mohenjo Daro
                        to renowned Indian monuments such as Kedarnath, Tirumala, Golden Temple, Hawa Mahal, and
                        Charminar. In addition, it features globally recognized World Heritage sites like the Eiffel
                        Tower in Paris and the Leaning Tower of Pisa, along with the iconic Taj Mahal. Furthermore, the
                        exhibition incorporates elements of the Jurassic World, including 3D dinosaurs, a volcano,
                        skeleton of dinosaur, and a waterfall, to add an element of excitement and adventure. Selfie
                        point, where you can transport yourself to the prehistoric era with a 2D cutout of a roaring
                        dinosaur, framed by a zoo gate. The entrance of the exhibition is designed to resemble a cave,
                        enhancing the immersive experience for visitors.
                        More than 300 students were participated in competition along with 50 students doing exhibition
                        work. More than 1500 visitors visited the exhibition
                        Reasoning behind the Name: Ancient Amusements The name “Ancient Amusements” aptly captures the
                        essence and purpose of the art exhibition.
                        Art Exhibition was inaugurated on 11th of April by Mr. Karanje sir, Head of Solapur Municipal
                        Corporation
                        The combined dedication, talent, and collaboration of individuals have truly brought the “Canvas
                        of the ages, where art weaves the stories of ancient amusements” to life.
                    </p>
                </div>
                <div id="art-bot">
                    <div id="clubleft">
                        <p>
                            <strong>Faulty Coordinator</strong> <br />
                            Mrs. Rashmi K. Dixit <br />
                            Mr. Sushant S. Patil <br />
                        </p>
                    </div>
                    <div id="clubright">
                        <p>
                            <strong>Student council (Post Bearers)</strong> <br />
                            Pranali Dhurupe Omkar Vathare <br />
                            Vaibhavi Surpure Pushkar Konshirasgi <br />
                            Gorakh Nimbalkar <br />
                            Laxminarayan Gaddam <br />
                            Sahil Ambekar <br />
                        </p>
                    </div>
                </div>
                <div id="goo-head">
                    <h2>GOOGLE DEVELOPER STUDENT CLUB</h2>
                </div>
                <div id="goo-text">
                    <img src={google} alt="" />
                    <p>
                        Google Developer Student Clubs are university based community groups for students interested in
                        Google developer technologies. Students from all undergraduate or graduate programs with an
                        interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge
                        in a peer-to-peer learning environment and build solutions for local businesses and their
                        community.
                    </p>
                </div>
                <div id="lea-head">
                    <h2>LEARNING OUT LOUD CODING CLUB</h2>
                </div>
                <div id="lea-text">
                    <ul>
                        <li>Learning out loud coding Club PDF - <a href="#">Click to View</a>
                        </li>
                    </ul>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default ClubsPage