import React from 'react'

const PhoneDetail = ({Phone}) => {
  return (


    <div className='row , c'>
      {Phone.map((d)=>{
        console.log(d.name);
        
        return(

          <div className='card m-1' style={{width:"18rem"}}>
          <img className='img-fluid' src={d.image} style={{height:"200px"}}></img>
          <h3 style={{color:"purple",textAlign:"center"}}>{d.name}</h3>
          <h5 style={{color:"green",textAlign:"center"}}>{d.price}</h5>
          <h6>{d.brand}</h6>
          <h6>Camera : {d.Camara}</h6>
          <h6>Height : {d.height}</h6>
          <h6>Weight : {d.weight}</h6>
          <h6>Battery : {d.battery}</h6>
          <p>{d.desc}</p>
          <h6><span class="badge text-bg-danger">Out of stock</span></h6>
        </div>
        )
      })}
     
    </div>
  )
}

export default PhoneDetail




