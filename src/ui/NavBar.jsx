import React, { useState } from "react";
import { motion } from "framer-motion";
import "./NavBar.scss";
import logoPorfolio from "../assets/Images/logoportfolio.jpg";
import Sidebar from "./Sidebar";
import { links } from "../assets/links";

const NavBar = () => {
  const [showHambuger, setShowHamburger] = useState(false);

  const showNavContainer = `navLinkContainer${showHambuger ? " open" : ""}`;

  return (
    <div className="navBarContainer">
      <a href={"#header"}>
        <img className="logoPorfolio" src={logoPorfolio} alt="" />
      </a>
      <motion.div
        className={showNavContainer}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        {links.map((link) => (
          <a key={link.number} href={link.href} className="navLinkItem">
            {link.text}
          </a>
        ))}
      </motion.div>
      <Sidebar
        setShowHamburger={setShowHamburger}
        showHambuger={showHambuger}
      />
    </div>
  );
};

export default NavBar;
