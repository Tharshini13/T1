import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhoneDetail from './PhoneDetail';
import Laptop from "./Laptop"
import Furniture from "./Furniture";
import Electronics from "./Electronics"
import Dresses from './Dresses';
import Watch from "./Watch"


const ProductDetail = ({ DataUrl }) => {

  let [Data,setData] = useState([])
  

useEffect(() => {
  axios
    .get(DataUrl)
    .then((res) => {
      console.log(res.data);
      // Check if res.data is an array or handle based on actual structure
      if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        console.error('Expected an array but got:', res.data);
      }
    })
    .catch((e) => {
      console.log('Error fetching data:', e);
    });
}, [DataUrl]);

  if(DataUrl == "http://localhost:8000/phones" ){
    return <PhoneDetail  Phone={Data}/>
  }
else if(DataUrl == "http://localhost:8000/laptops"){
  return <Laptop Lap={Data}/>
}
else if(DataUrl == "http://localhost:8000/Furnitures" ){
  return <Furniture Fur={Data}/>
}
else if(DataUrl == "http://localhost:8000/Electronics" ){
  return <Electronics Elec={Data}/>
}
else if(DataUrl == "http://localhost:8000/Dresses" ){
  return <Dresses Dress={Data}/>
}
else if(DataUrl == "http://localhost:8000/Watch" ){
  return <Watch watch={Data}/>
}

 
};

export default ProductDetail;
