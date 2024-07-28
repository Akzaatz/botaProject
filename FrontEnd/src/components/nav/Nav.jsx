import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div>
      <nav className="nav">
        <h1>botaProject</h1>

        <div className="hamburger" onClick={handleHamburgerClick}>
          <span className="stick"></span>
          <span className="stick"></span>
          <span className="stick"></span>
        </div>
        <div className={`nav_link ${isNavVisible ? "" : "hide"}`}>
          <NavLink to="/">Acceuil</NavLink>
          <NavLink to="Blog">Blog</NavLink>
          <NavLink to="Boutique">Boutique</NavLink>
          <NavLink to="Signin">Zone Membres</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
