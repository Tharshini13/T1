import React from 'react'

const Watch = ({watch}) => {
  return (


    <div className='row , c'>
      {watch.map((w)=>{
        console.log(w.name);
        
        return(

          <div className='card m-1' style={{width:"250px"}}>
          <img className='img-fluid' src={w.image} style={{height:"200px"}}></img>
          <h3 style={{color:"purple",textAlign:"center"}}>{w.name}</h3>
          <h5 style={{color:"green",textAlign:"center"}}>{w.price}</h5>
          <h6>{w.brand}</h6>
          <h6>Size : {w.size}</h6>
          <h6>Operating system : {w.operatingsystem}</h6>
          <h6>Memory storage : {w.memorystorage}</h6>
          <h6>Color : {w.color}</h6>
          <h6>Swimproof : {w.swimproof}</h6>
          <h6>Battery : {w.battery}</h6>
          <h6>Special features : {w.specialfeatures}</h6>
          <h6>Description : {w.description}</h6>
          <h6><span class="badge text-bg-danger">Out of stock</span></h6>
        </div>
        )
      })}
     
    </div>
  )
}

export default Watch




