import React from "react";
import logo from "../../city-tour.png";
import './HeadingNav.scss'



function HeadingNav() {
  return (
    <div>
        
      <nav className="navbar">
        <img src={logo} alt='city-tour logo' width='60px' height='30px'/>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link" >
              home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link" >
              about
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active" >
              tours
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeadingNav;
