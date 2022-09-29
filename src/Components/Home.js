import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active slide1 slide text-center">
          <div className='container'>

            <p className='display-4'>Hi!</p>
            <p>I'm a Full Stack Developer</p>
            <button className='btn btn-dark'>Learn More</button>
            <button className='btn btn-dark'>Hire Me</button>
          </div>

        </div>

        <div class="carousel-item slide2 slide text-center">

          <div className="container">
            <p className='display-4'>Hi!</p>
            <p>I am Syed Kashif Haider</p>
            <button className='btn btn-dark'>Learn More</button>
            <button className='btn btn-dark'>Hire Me</button>
          </div>

        </div>

        <div class="carousel-item slide3 slide text-center">

          <div className='container'>

            <p className='display-4'>Hi!</p>
            <p>I'm a Full Stack Developer</p>
            <button className='btn btn-dark'>Learn More</button>
            <button className='btn btn-dark'>Hire Me</button>
          </div>

        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Home;