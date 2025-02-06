import React from 'react'

const Laptop = ({Lap}) => {
  return (

    <div className='row , c'>
      {Lap.map((d)=>{
        console.log(d.name);
        
        return(

          <div className='card m-1' style={{width:"250px"}}>
          <img className='img-fluid' src={d.image} style={{height:"200px"}}></img>
          <h3 style={{color:"purple",textAlign:"center"}}>{d.name}</h3>
          <h5 style={{color:"green",textAlign:"center"}}>{d.price}</h5>
          <h6>{d.brand}</h6>
          <h6>Windows : {d.windows}</h6>
          <h6>Installed memory : {d.installedmemory}</h6>
          <h6>Batteryhours: {d.batteryhours}</h6>
          <h6>Drivecapacity : {d.drivecapacity}</h6>
          <h6>GraphicsIntel : {d.graphicsIntel}</h6>
          <h6>ProcessorCore : {d.processorCore}</h6>
          <h6>Display : {d.display}</h6>
          <h6>Weight : {d.weight}</h6>
          <p>{d.description}</p>
          <h6><span class="badge text-bg-danger">Out of stock</span></h6>
        </div>
        )
      })}
     
    </div>
  )
}

export default Laptop
