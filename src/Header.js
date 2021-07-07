import "./App.css";
import logo from "./images/playpielogo.png";
import Home from "./Home";

import { Link, NavLink } from "react-router-dom";

function myBurger() {
  const menu = document.getElementById("myTopnav");
       if (menu.className === "topnav") {
       menu.className += " responsive";
      } else {
      menu.className = "topnav";
  }
}

function Header() {
  return (
    <>
      <header >
        <div><img src={logo} alt="" /></div>
        <div class="topnav" id="myTopnav">
        <div><div className="navLinks">
          <ul className="navLeft">
            <li>
              <Link to="/"> 
                Home 
              </Link>
            </li>
            <li className="aboutUs">
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/artists" >
                Artists
              </NavLink>
            </li>
            <li>
              <Link to="/fans" > 
                Fan-vestors
              </Link>
            </li>
            <li className="FAQs">
              <Link to="/faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
           <ul className="navRight">
            <li>
              <a href="www.playpie.co">Sign Up </a> </li>
              <li><a href="www.playpie.co"> Sign In</a>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
       </a>
        </div>
        
         
  </div>
      </header>
     
    </>
  );
}

export default Header;
