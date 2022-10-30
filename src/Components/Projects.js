import React from 'react';
import './home.css';

const Projects = () => {
    return (
        <div className='style bg-black'>
            <div className='container1 text-center'>

                <h1>My Projects</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">       
                            <img src="thumbnailp-1.png" alt="thumbnail-1" />
                            <div class="card-body card-height">
                                <h5 class="card-title">1. Gym Landing Page</h5>
                                <p class="card-text">Gym website landing page using HTML and CSS</p>
                                <a href = "">Github link</a>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="thumbnailp-2.png" alt="thumbnail-2" />
                        <div class="card-body card-height">
                            <h5 class="card-title">2. Food Delivery Website</h5>
                            <p class="card-text">A full responsive website with the help of HTML and CSS. This website is somewhat similar to food delivery services. The website automatically behaves responsively according to different screen sizes.</p>
                            <a href = "https://github.com/Syedkashif786/Food-Delivery-Website" target="blank">Github link</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="thumbnailp-3.png" alt="thumbnail-3" />
                        <div class="card-body card-height">
                            <h5 class="card-title">3. Bootstrap Project</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href = "https://github.com/Syedkashif786/Bootstrap-project-E-commerce" target = "blank">Github link</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="thumbnailp-4.png" alt="thumbnail-4" />
                        <div class="card-body card-height">
                            <h5 class="card-title">4. File Preview Generation Tool</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href = "">Github link</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="thumbnailp-5.png" alt="thumbnail-5" />
                        <div class="card-body card-height">
                            <h5 class="card-title">6. E-commerce Website</h5>
                            <p class="card-text">A full responsive website with the help of HTML, CSS and Bootstrap. This website is somewhat similar to e-commerce services.  The website automatically behaves responsively according to different screen sizes.</p>
                            <a href = "https://github.com/Syedkashif786/E-commerce-project" target = "blank">Github link</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="thumbnailp-6.png" alt="thumbnail-6" />
                        <div class="card-body card-height">
                            <h5 class="card-title">5. My Portfolio Website</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href = "https://github.com/Syedkashif786/My-portfolio-Website">Github link</a>
                        </div>
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
                        <a href="https://www.instagram.com/accounts/login/" target = '_blank'><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/login/" target = '_blank'><i class="fa-brands fa-facebook"></i></a>
                    </p>
                {/* </footer> */}

            </section>
        </div>
    )
}

export default Projects;