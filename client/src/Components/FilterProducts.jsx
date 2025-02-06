import React, { useState } from 'react'
import "../Components/Style.css"

const FilterProducts = ({seturl}) => {




  
  return ( 
    <div id='FP'>  
        <button className='btn btn-outline-danger w-25 m-2' onClick={()=>{seturl("http://localhost:8000/phones")}}>Phone</button> <br />
        <button className='btn btn-outline-danger w-25 m-2'  onClick={()=>{seturl("http://localhost:8000/laptops")}}>Laptops</button> <br /> 
        <button className='btn btn-outline-danger w-25 m-2'  onClick={()=>{seturl("http://localhost:8000/Furnitures")}}>Furnitures</button> <br /> 
        <button className='btn btn-outline-danger w-25 m-2'  onClick={()=>{seturl("http://localhost:8000/Electronics")}}>Electronics</button> <br />
        <button className='btn btn-outline-danger w-25 m-2'  onClick={()=>{seturl("http://localhost:8000/Dresses")}}>Dresses</button> <br />
        <button className='btn btn-outline-danger w-25 m-2'  onClick={()=>{seturl("http://localhost:8000/Watch")}}>Watch</button> 
    </div>
  )
}

export default FilterProducts
