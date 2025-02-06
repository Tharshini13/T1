import React from 'react'

const Furniture = ({Fur}) => {
  return (


    <div className='row , c'>
      {Fur.map((f)=>{
        console.log(f.name);
        
        return(

          <div className='card m-1' style={{width:"250px"}}>
          <img className='img-fluid' src={f.image} style={{height:"200px"}}></img>
          <h3 style={{color:"purple",textAlign:"center"}}>{f.name}</h3>
          <h5 style={{color:"green",textAlign:"center"}}>{f.price}</h5>
          <h6>{f.brand}</h6>
          <h6>Size : {f.size}</h6>
          <h6>Material : {f.material}</h6>
          <h6>ProductDimensions : {f.productDimensions}</h6>
          <h6>Color : {f.color}</h6>
          <h6>Weight : {f.weight}</h6>
          <h6>Maximum Weight Recommendation : {f.maximumWeightRecommendation}</h6>
          <h6>Warranty : {f.warranty}</h6>
          <h6><span class="badge text-bg-danger">Out of stock</span></h6>
        </div>
        )
      })}
     
    </div>
  )
}

export default Furniture




