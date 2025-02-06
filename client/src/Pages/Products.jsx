import React from 'react'
import FilterProducts from '../Components/FilterProducts'
import ProductDetail from '../Components/ProductDetail'
import { useState } from 'react'



const Products = () => { 
   
let [url,setUrl] = useState("http://localhost:8000/phones")

  
  return (
    <div className='row'>
<div className='col-sm-2'>
<FilterProducts seturl={setUrl}/>
</div>

<div className="col-sm-10">
  <ProductDetail DataUrl = {url}/>
</div>
      

      
 
    </div>
  )
}

export default Products
