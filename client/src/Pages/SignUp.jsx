import React from 'react'
import img from '../assets/palm_leaves.jpg'
import i from "../assets/person.png"
import eye from "../assets/eye.png"
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (

    <div id='loginpage'>
      <img id='imgbg' src={img}></img>
      
      <div className='log p-5'>
        <h1 id='h1s'>Sign Up</h1>
        <form>
        <div class="input-group mb-3 inpname ">
          <input type="text" class="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" ></input>
          <span class="input-group-text" id="basic-addon2"><img id='profimg' src={i}></img></span>
        </div>
        <div class="input-group mb-3 inpname ">
          <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
          <span class="input-group-text" id="basic-addon2"><img id='profimg' src={eye}></img></span>
        </div>
        <div class="input-group mb-3 inpname ">
          <input type="text" class="form-control" placeholder="Confirm Password" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
          <span class="input-group-text" id="basic-addon2"><img id='profimg' src={eye}></img></span>
        </div>
        <button type="button" class="btn btn-secondary btnsubmit">Submit</button>
        <Link to="/login" id='loginlink'>Already have an account?</Link>
        </form>
      </div>



    </div>

  )
}

export default SignUp
