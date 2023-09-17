import { Link } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import coll from '../src/Images/college_building.jpg'
import naac from '../src/Images/naac-a+.jpg'
import nba from '../src/Images/nba_logo.jpg'
import civil from '../src/Images/civil.jpg'
import cs from '../src/Images/cs.jpg'
import mech from '../src/Images/mech.jpg'
import it from '../src/Images/it.jpg'
import entc from '../src/Images/entc.jpg'
import ecs from '../src/Images/e&cs.jpg'
import witleft from '../src/Images/wit-left.jpg'
import './App.css';

function App() {
  return (
    <>
     <Header/>
     <div id="page1">
            <div id="content">
                <img src={coll} alt="college img"/>
                    <div id="heading">
                      <h2> S. A. P. D. Jain Pathshala’s </h2>
                      <h1>Walchand Institute of Technology,</h1>
                      <h1> Solapur</h1>
                      <h3>An Autonomous Institute</h3>
                    </div>
            </div>
        </div>
        <div id="page2">
            <div id="top">
                <div id="tleft">
                    <h1>Accreditation & Recognition</h1>
                    <div id="images">
                        <img src={naac} alt=""/>
                        <img src={nba} alt=""/>
                    </div>
                </div>
                <div id="tright">
                    <h1> News and Events </h1>

                    <h3>Short Video Competition on Implementation of NEP 2020 -Regarding</h3>
                    <h3>Invitation for Annual Prize Distribution 2023</h3>
                    <h3>WITchar-2k23</h3>
                    <h3>AICTE</h3>
                    <h3>Social Media</h3>
                </div>
            </div>
            <div id="bottom">
                <div id="bot-up">
                    <h1>
                        Our Programs
                    </h1>
                </div>
                <div id="bot-down">
                    <div class="card">

                        <img src={civil} alt=""/>
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
        </div>
        <div id="page3">
            <div id="p3_up">
                <div id="p3_left">
                    <img src={witleft} alt=""/>

                </div>
                <div id="p3_right">
                    <h1>Why choose WIT, Solapur?</h1>
                    <h2>Walchand Institute of Technology, one of the pioneering self financed Institution in engineering
                        education & research was established in 1983 by SAPDJ Pathshala Trust <br/>
                        ( Estb. 1885).</h2>
                    <i class="ri-artboard-line"></i>
                    <h3 class="firsth3">LEARN FROM HIGHLY EXPERIENCED FACULTY</h3>
                    <h4>Our faculty are selected on the basis of proven success and expertise. They are
                        among the best in their respective fields. You will learn from a multinational community of
                        recognized scholars and experts.</h4>
                    <i class="ri-user-settings-line"></i>
                    <h3>EQUIP YOURSELF WITH THE SKILLS THAT RECRUITERS DEMAND</h3>
                    <h4>Our enhanced curriculum imparts cutting-edge skills to help students ast-track
                        their career growth in today’s uncertain environment. Develop crucial skills like
                        global intelligence, creativity & innovation, decision-making.</h4>
                    <i class="ri-flag-line"></i>
                    <h3>BENEFIT FROM OUR MULTINATIONAL CAREER ADVANCEMENT SERVICES</h3>
                    <h4>Whether you’re looking to advance your career in India or abroad, change your
                        career path or start your own business, our Professional Readiness Program, multinational career
                        services.</h4>
                </div>
            </div>
            <div id="p3_down">
                <div id="p3_text">
                    <h1>Follow Us On Social Media</h1>
                </div>
                <div id="p3botlogo">
                    <a href="https://www.facebook.com/witsolapur" target="_blank" class="p3-1"><i class="ri-facebook-circle-fill"></i></a>
                    <a href="https://www.instagram.com/wit_solapur_official/" target="_blank"  class="p3-2"><i class="ri-instagram-line"></i></a>
                    <a href="https://twitter.com/SolapurWit" target="_blank"  class="p3-3"><i class="ri-twitter-x-line"></i></a>
                    <a href="#" class="p3-4"><i class="ri-whatsapp-line"></i></a>
                    <a href="https://www.linkedin.com/school/walchand-institute-of-technology-solapur/" class="p3-5"><i class="ri-linkedin-fill"></i></a>
                </div>
                <Footer/>
            </div>
        </div>
    </>
  );
}

export default App;
