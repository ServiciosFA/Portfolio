import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [showHambuger, setShowHamburger] = useState(false);

  const activeHamburger = `hamburger${showHambuger ? " open" : ""}`;
  const showNavContainer = `navLinkContainer${showHambuger ? " open" : ""}`;

  const hamburgerHandler = () => {
    setShowHamburger((prevState) => !prevState);
  };

  return (
    <div className="navBarContainer">
      <div className="hamburgerContainer" onClick={hamburgerHandler}>
        <GiHamburgerMenu className={activeHamburger}></GiHamburgerMenu>
      </div>
      <div className={showNavContainer}>
        <a href="#quiensoy" className="navLinkItem">
          Quíen soy
        </a>
        <a href="#projects" className="navLinkItem">
          Proyectos
        </a>
        <a href="#contact" className="navLinkItem">
          Contacto
        </a>
      </div>
    </div>
  );
};

export default NavBar;
