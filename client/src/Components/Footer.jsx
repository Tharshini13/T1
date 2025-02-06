import React from 'react'
import "../Components/Style.css"
import i from '../assets/instagram.png'
import f from '../assets/facebook.png'
import t from '../assets/twitter.png'
import w from '../assets/whatsapp.png'
import y from '../assets/youtube.png'

const Footer = () => {
  return (
    <div style={{background:"#f34b4b",padding:"30px"}}>
      <h4 style={{color:"white",textAlign:"center"}}>Contact Us</h4>

        <div id='icon' style={{textAlign:"center",paddingTop:"20px"}}>
            <img style={{height:"30px",paddingRight:"10px"}} src={i}></img>
            <img style={{height:"30px",paddingRight:"10px"}} src={f}></img>
            <img style={{height:"30px",paddingRight:"10px"}} src={t}></img>
            <img style={{height:"30px",paddingRight:"10px"}} src={w}></img>
            <img style={{height:"30px",paddingRight:"10px"}} src={y}></img>
        </div>

        <p style={{color:"white",textAlign:"center",paddingTop:"20px"}}>2024 ALL rights Reserved Terms of Use and Privacy Policy</p>

        </div>


  )
}

export default Footer
