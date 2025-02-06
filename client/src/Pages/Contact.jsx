import React from 'react'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import location from '../assets/location.png'
import '../Components/Style.css'


const Contact = () => {
  return (
    <div>
    

      <img style={{width:"100%"}}></img>

      <h1 id='contact' style={{fontWeight:"bold",textAlign:"center",position:"relative",top:"25px"}}>Contact Us</h1>

      <div className='row'>
        <div className='col-sm-5 details'>
          <div className='card' style={{position:"relative",left:"100px",top:"90px",padding:"10px"}}>
            <h3 style={{textAlign:"center",paddingBottom:"30px"}}>Get In Touch</h3>
            <img id='phoneimg' style={{position:"relative",left:"50px"}} src={phone}></img>
            <p style={{position:"relative",left:'70px',bottom:'20px'}}>+91 1234567890</p>
            <img id='mailimg' style={{position:"relative",left:"50px"}} src={mail}></img>
            <p style={{position:"relative",left:'70px',bottom:'22px'}}>abc@gmail.com</p>
            <img id='locationimg' style={{position:"relative",left:"50px"}} src={location}></img>
            <p style={{position:"relative",left:'70px',bottom:'22px'}}>123 street,Tenkasi</p>
          </div>
        </div>

        <div className='col-sm-5 udetails'>
          <div className='card' style={{position:"relative",left:"100px",top:"90px",padding:"10px"}}>
            <h3 style={{paddingBottom:"30px",textAlign:"center"}}>Send Us A Message</h3>
            <form>
            <div class="col-auto" style={{paddingBottom:"30px"}}>
              <input type="text" class="form-control"  placeholder="Username"></input>
            </div>
            <div class="col-auto" style={{paddingBottom:"30px"}}>
              <input type="text" class="form-control"  placeholder="Password"></input>
            </div>
            <div class="col-auto" style={{paddingBottom:"30px"}}>
              <input type="text" class="form-control"  placeholder="Message"></input>
            </div>
            <button type="button" class="btn btn-primary" style={{fontWeight:"bold"}}>SUBMIT</button>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
