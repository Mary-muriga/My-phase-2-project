import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        HOME
      </Link>
      <Link className="nav-link" to="/main">
        SHOWROOM
      </Link>

      <Link className="nav-link" to="/AddProductForm">
        ADD PRODUCT
      </Link>
    </nav>
  );
}

export default Navbar;
