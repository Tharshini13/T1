import React from 'react'

const Electronics = ({Elec}) => {
  return (


    <div className='row , c'>
      {Elec.map((e)=>{
        console.log(e.name);
        
        return(

          <div className='card m-1' style={{width:"250px"}}>
          <img className='img-fluid' src={e.image} style={{height:"200px"}}></img>
          <h3 style={{color:"purple",textAlign:"center"}}>{e.name}</h3>
          <h5 style={{color:"green",textAlign:"center"}}>{e.price}</h5>
          <h6>{e.brand}</h6>
          <h6>Size : {e.size}</h6>
          <h6>Roomtype : {e.Roomtype}</h6>
          <h6>productDimensions : {e.productDimensions}</h6>
          <h6>Color : {e.color}</h6>
          <h6>Weight : {e.weight}</h6>
          <h6>Recommended uses for product : {e.Recommendedusesforproduct}</h6>
          <h6>Warranty : {e.warranty}</h6>
          <h6><span class="badge text-bg-danger">Out of stock</span></h6>
        </div>
        )
      })}
     
    </div>
  )
}

export default Electronics




