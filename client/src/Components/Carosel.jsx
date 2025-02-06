import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import e1 from '../assets/E1.webp'
import e2 from '../assets/E2.jpeg'
import e3 from '../assets/E3.jpg'

const Carosel = () => {
  return (
    <div>
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner " style={{height:"350px"}}>
    <div class="carousel-item active">
      <img src={e1} style={{height:"350px"}} class="d-block w-100"></img>
    </div>
    <div class="carousel-item">
      <img src={e2} style={{height:"350px"}} class="d-block w-100"></img>
    </div>
    <div class="carousel-item">
      <img src={e3} style={{height:"350px"}} class="d-block w-100"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    </div>
    </div>
  )
}

export default Carosel
