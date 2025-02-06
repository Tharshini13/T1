import React from 'react'

const Accordian = () => {
  return (
    <div>
        <h4  style={{position:"relative",top:"20px"}}>Why Shop with Us?</h4>
        <div class="accordion accordion-flush"  style={{position:"relative",top:"20px"}} id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Wide Selection
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Discover a curated collection of premium products designed to suit every taste and need. From ParaDox E-comm, to, we offer a variety that ensures you find what you're looking for.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Unbeatable Prices: 
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We believe in making high-quality products accessible to everyone. Enjoy competitive prices and amazing deals on your favorite items.
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Fast, Reliable Shipping:
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Get your order delivered quickly and safely, no matter where you are. With flexible shipping options, we ensure a seamless shopping experience from start to finish.</div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Accordian
