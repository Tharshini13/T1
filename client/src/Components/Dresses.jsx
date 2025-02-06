import React from 'react'

const Dresses = ({Dress}) => {
  return (


    <div className='row , c'> 
      {Dress.map((dr)=>{
        console.log(dr.name);
        
        return(

          <div className='card m-1' style={{width:"250px"}}>
          <img className='img-fluid' src={dr.image} style={{height:"200px"}}></img>
          <h3 style={{color:"purple",textAlign:"center"}}>{dr.name}</h3>
          <h5 style={{color:"green",textAlign:"center"}}>{dr.price}</h5>
          <h6>Size : {dr.size}</h6>
          <h6>Materialtype : {dr.materialtype}</h6>
          <h6>Itemweight : {dr.itemweight}</h6>
          <h6>Color : {dr.color}</h6>
          <h6>ItemDimensions : {dr.itemDimensions}</h6>
          <h6>Netquantity : {dr.netquantity}</h6>
          <h6>Style : {dr.style}</h6>
          <h6>Country of origin : {dr.countryoforigin}</h6>
          <h6>Description : {dr.description}</h6>
          <h6><span class="badge text-bg-danger">Out of stock</span></h6>
        </div>
        )
      })}
     
    </div>
  )
}

export default Dresses




