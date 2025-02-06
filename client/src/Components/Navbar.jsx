import "../Components/Style.css"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "../Pages/Contact";

const Navbar = () => {
  return (
    <div id="nav">
      <div id="Nav">
          <div id="Title">    
              <h1>ParaDox-EComm</h1>
          </div>

          <div id="nav1">
          <Link className="link" to="/">Home</Link>
            <Link className="link" to='/contact' >Contact</Link>
            <Link className="link" to='/product'>Products</Link>
            <Link className="link" to="/signup"><button id="signup">Sign Up</button></Link>
          
          </div>
      </div>

      <div className="navM">

      <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">ParaDox-Ecomm</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/product">Products</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


   
  </div>



    </div>
  )
}

export default Navbar
