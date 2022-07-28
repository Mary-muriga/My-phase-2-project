import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link className="nav-link" to="/Home">
          HOME
        </Link>
        <Link className="nav-link" to="/Login">
          LOGIN
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
