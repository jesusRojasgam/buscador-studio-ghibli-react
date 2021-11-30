import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
    return (
        <div className="nav">
      <nav>
        <div>
            <Link to="/">
              Home
            </Link>
          </div>
          <div>
            <Link to="/SearchFilm" >
              Buscador
            </Link>
          </div>
          <div>
            <Link to="/About">
              Ghibli
            </Link>
          </div>
      </nav>
    </div>
    )
}

export default Navbar
