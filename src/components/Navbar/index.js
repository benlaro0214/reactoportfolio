import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        THE CODING HAIKU
      </Link>
      <nav className="mr-auto"></nav>
      
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            
            <Link
              to="/about"
              className={
                window.location.pathname === "/about" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              } >
          About
            </Link>
        
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
