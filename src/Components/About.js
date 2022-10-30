import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='box0 text-dark'>
            <div className='box1 text-center'>
                <h1>Syed Kashif Haider</h1>
                <p>Lucknow, UttarPradesh | +91 7052425958 | syedkashif.856@gmail.com</p>
            </div>
            <hr />

            <div className='container2'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="https://cdn-icons-png.flaticon.com/512/7904/7904305.png" alt="Profile Summary" />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='fw-bold pt-4'>Profile Summary</h2>
                        <p className='pt-2'>My current career objective is to be a part of an esteemed organisation, and contribute significantly towards its growth, learn new skills and utilize them to the best of my ability. I look forward to establishing myself by adapting new technologies as well.
                        </p>
                    </div>
                    <hr />

                    <div className='col-md-6'>
                        <img src="https://img.freepik.com/free-vector/isometric-education-illustration-with-books_1284-64357.jpg?w=2000" alt="Education" />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='fw-bold'>Education</h2>
                        <li className='fw-bold pt-2'>High School | CBSE</li>
                        <p className='ps-4'>St. Clare's Convent School, Lucknow</p>
                        <li className='fw-bold'>Intermediate | CBSE</li>
                        <p className='ps-4'>St. Clare's Convent School, Lucknow</p>
                        <li className='fw-bold'>B.tech | AKTU</li>
                        <p className='ps-4'>Noida Institute of Engineering And Technology, Greater Noida</p>
                    </div>
                    <hr />

                    <div className='col-md-6'>
                        <img src="https://cdn-icons-png.flaticon.com/512/6552/6552060.png" alt="Work Experience" />
                    </div>
                    <div className='col-md-6'>

                        <h2 className='fw-bold'>Work Experience</h2>
                        <p><li className='fw-bold pt-2'>Full Stack Intern (MERN)</li></p>
                        <p className='fw-bold ps-4'>Digipodium | Lucknow</p>
                        <p className='ps-4'>Build, maintain website using scripting languages, management tools and develop database. (HTML, CSS, Bootstrap, JavaScript, React JS, Express JS, MongoDb, Node JS, SEO)</p>
                    </div>
                    <hr />

                    <div className='col-md-6'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3080/3080467.png" alt="Technical Skill" />
                    </div>
                    <div className='image col-md-6'>

                        <h2 className='fw-bold'>Technical Skill</h2>

                        <li className='pt-2'><i class="fa-brands fa-java"></i> Java</li>
                        <li className='pt-2'><i class="fa-brands fa-html5"> HTML</i>, <i class="fa-brands fa-css3-alt"> CSS</i>, <i class="fa-brands fa-js"> JavaScript</i> </li>
                        <li className='pt-2'><i class="fa-brands fa-bootstrap"> Bootstrap</i> </li>
                        <li className='pt-2'><img src="https://cdn4.iconfinder.com/data/icons/technology-83/1000/object_programming_development_oriented_developer_object-oriented_programming_software-512.png" alt="OOP Concept" />Object Oriented Programming </li>
                        <li className='pt-2'><img src="https://www.mangoitsolutions.com/wp-content/uploads/2022/01/becomeamernstackdeveloper-mobile-300x279.png" alt="MERN" /> MERN Stack</li>
                    </div>
                    <hr />

                    <div className='col-md-6'>
                        <img src="https://banasdairy.coop/wp-content/uploads/2021/11/Untitled_design__1_-removebg-preview.png" alt="Achievements" />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='fw-bold'>Achievements</h2>
                        <li className='fw-bold pt-2'>MERN Stack Development</li>
                        <p className='ps-4'>Scored Grade A in MERN Stack Development authorized by Digipodium.</p>
                        <li className='fw-bold'> Introduction to HTML,CSS,JavaScript Certificate</li>
                        <p className='ps-4'>Introduction to Web Development with HTML,CSS,Javascript an online non-credit course authorized by IBM through Coursera.</p>
                        <li className='fw-bold'> Business English Certificate Preliminary</li>
                        <p className='ps-4'>Cambridge English Entry Level Certificate in ESOL International(Entry 3) Business English Certificate Preliminary Council of Europe Level B1.</p>
                    </div>
                </div>
            </div>

            <section className='section4 text-center mt-4'>
                {/* <img src="portfoliologo.png" alt="logo" /> */}
                <h2>PORTFOLIO</h2>
                <h1 className='pt-2'>syedkashif.856@gmail.com</h1>

                {/* <footer className='foot d-flex'> */}
                {/* Copyright &copy; All rights reserved  */}
                <p className='mt-5'>Stay Connected
                    <a href="https://www.linkedin.com/in/syed-kashif-haider-99627518b/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/accounts/login/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/login/" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                </p>
                {/* </footer> */}

            </section>

        </div>
    )
}

export default About;