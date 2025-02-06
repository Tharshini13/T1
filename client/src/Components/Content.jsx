import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import I1 from "../assets/i1.svg"
import Accordian from './Accordian';




const Content1 = () => {
  return (
    <div className='row' >
      <img src={I1}  className='col-sm-6' style={{position:"relative",top:"10px"}}></img>

      <div className="col-sm-6">
        <h1 className='display-6' style={{position:"relative",top:"20px",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Welcome to ParaDox E-comm </h1>
        <p className='lead' style={{position:"relative",top:"20px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif",fontSize:"16px"}}>At ParaDox E-comm, we're committed to bringing you the best in describe your product category, e.g., fashion, electronics, home decor, etc. Whether you're looking for the latest trends, innovative gadgets, or unique home essentials, we have something for everyone.</p>
        <Accordian />
      </div>

    </div>
  )
}

export default Content1
