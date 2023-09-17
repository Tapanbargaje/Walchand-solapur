import React from 'react'
import prin from '../Images/principal.png'
import priM from '../Images/priM.png'
import sceM from '../Images/secM.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './About.css'

const AboutPage = () => {
  return (
    <>
    <Header/>
    
    <div id="content">
                <div id="cont">
                    <h2>OVERVIEW</h2>
                </div>
                <div id="desc">
                    <h3> <span class="bolderr">Shri Aillak Pannalal Digambar Jain Pathashala Trust,</span> established
                        in 1885, started this college
                        in July 1983 which is appropriately named after <span class="bolderr"> Seth Walchand
                            Hirachand,</span> one of our country’s
                        pioneer’s of industrial development. It is the sincere desire of the trust and the Governing
                        Body of the Institute to maintain high academic and technological standards. This would indeed
                        be a fitting tribute to the celebrated industrial giant. It is hoped that Seth Walchand’s name
                        and achievements will inspire the students passing through the portals of this college to attain
                        high degree of proficiency in their academic and professional career. The college has
                        consistently achieved excellent results in the University examinations. The facilities provided
                        at the college have been adjudged amongst the best, according to an independent Newspaper study
                        and by an inspiration team of Directorate of Technical Education, Maharashtra. The institute
                        began with Production Engg., Environmental Engg., Electronics Engg. branches. The Institute is
                        affiliated to the Solapur University, Solapur and approved by the All India Council for
                        Technical Education, New Delhi (A.I.C.T.E., New Delhi.).
                    </h3>
                </div>
                <div id="vis-head">
                    <h2>VISION</h2>
                </div>
                <div id="vis-text">
                    <h2>” To produce young, globally competant Graduates / Post-Graduates / Doctoral Engineers with an
                        aptitude for leadership and research, to face the challenges for modernization and globalization
                        courageously who will be instrumental for overall growth of the society. “</h2>
                </div>
                <div id="mis-head">
                    <h2>MISSION</h2>
                </div>
                <div id="mis-text">
                    <ul type="square">
                        <li>To foster learning process & to provide proper ambience for motivating students for creating
                            awareness to excel in the ever expanding field of science and technology.</li>
                        <li>To impart quality Technical Education in accordance with the needs of the society through
                            various academic programs.</li>
                        <li>To enhance career opportunities for students through exposure to industries & research
                            institutions.</li>
                        <li>To strive for excellence by encouraging independent critical thinking, creativity &
                            discipline.</li>
                        <li>To create awareness for engineering ethics & human values for instilling moral, social
                            values & loyalty & to appreciate the rights of others & respect towards society & its
                            heritage.</li>
                        <li>To help the students to implement their acquired Engineering knowledge for society &
                            community development, thus, enhancing a strong sense of social responsibility &
                            accountability.</li>
                        <li>To reach to the community through various outreach programs to include the scientific
                            technological spirit among all.</li>
                        <li>To promote & provide a framework to meet campus sustainability goals & mitigate climate
                            change.</li>
                        <li>To help in nation building through a pool of dedicated, disciplined, intellectual &
                            integrated manpower.</li>
                    </ul>
                </div>
                <div id="goa-head">
                    <h2>GOALS</h2>
                </div>
                <div id="goa-text">
                    <ul type="square">
                        <li>To develop an ideal model for effective teaching-learning process.</li>
                        <li>To develop a healthy liaison between industry and institute to get rich dividends of both
                            the fields.</li>
                        <li>To simulate field environment so as to impart quality education to students.</li>
                        <li>To develop close academia -industry interaction for enriching teaching-learning process
                            faculty & students & to explore opportunities for students.</li>
                        <li>To develop state-of-the-art infrastructure, laboratories and facilities in accordance with
                            the need for delivering Quality Technical Education.</li>
                        <li>To promote ecologically sustainable growth of the campus by preparing action plan on climate
                            change.</li>
                    </ul>
                </div>
                <div id="qua-head">
                    <h2>QUALITY  POLICY</h2>
                </div>
                <div id="qua-text">
                    <h2>” To empower Faculty and Students by subscribing to Total Quality Management (TQM) and by
                        adopting dynamically improving teaching-learning process in the field of Science and Technology
                        to become a force to be reckoned with. “</h2>
                </div>
                <div id="cor-head">
                    <h2>CORE VALUES</h2>
                </div>
                <div id="cor-text">
                    <h2>” To empower Faculty and Students by subscribing to Total Quality Management (TQM) and by
                        adopting dynamically improving teaching-learning process in the field of Science and Technology
                        to become a force to be reckoned with. “</h2>
                </div>
                <div id="core-text">
                    <ul type="square">
                        <li>Student-centered: Our primary mission is to not only concentrate on educating students in their chosen programmes, but also to develop a complete personality that exhibits leadership, innovation, team spirit and a positive contributor to the society for nation building.</li>
                        <li>Learning-centered: To nurture faculty with intellectual thinking, flexibility, knowledge, skills integrating research, assessment and learning to promote continuous improvement of students through dedicated commitment.</li>
                        <li>Excellence: To pursue high standards through opportunities for achievement in teaching, research, innovation and service to all stake holders.</li>
                        <li>Diversity: To embrace and tune to diversity in all its dimensions realizing that mutual respect for individuality and inclusion of all are vital for each person contributing to institutional success.</li> 
                        <li>Service: To appreciate support and recognize services at all levels of the institute leading to benefit of all contributors resulting to the success of the institution.</li> 
                        <li>Honesty & integrity: To be committed to promote honesty & integrity assuring that academic performance is reliably evaluated and fairly rewarded.</li>
                        <li>Accountability: To foster an environment where members of the institute understand and accept responsibilities for upholding and reinforcing core values.</li>
                        <li>Synergy through team work: To focus on the traits of team work, good communication, empowerment and commitment to a goal benefiting all</li>
                    </ul>
                </div>
                <div id="pri-head"><h2>PRINCIPAL & SECRETARY DESK</h2>
                </div>
                <div id="pri-img">
                    <img src={prin} alt="img"/>
                </div>
                <div class="m-img">
                    <img src={priM} alt=""/>
                </div>
                <div class="m-img">
                    <img src={sceM} alt=""/>

                </div>
        
            </div>
  
    <Footer/>
    </>
  )
}

export default AboutPage