import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"


import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product' element={<Products />}></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
