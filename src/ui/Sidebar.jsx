import React from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";
import { links } from "../assets/links";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logoPorfolio from "../assets/images/LogoPortfolio.png";

const Sidebar = ({ showHambuger, setShowHamburger }) => {
  const { open, closed } = {
    open: {
      clipPath: "circle(1400px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(25px at 27px 35px)",
      transition: {
        delay: 0.05,
        type: "spring",
        stiffness: 20,
      },
    },
  };

  const activeHamburger = `hamburger${showHambuger ? " open" : ""}`;
  const hamburgerHandler = () => {
    setShowHamburger((prevState) => !prevState);
  };

  return (
    <motion.div className="modalSidebar" animate={showHambuger ? open : closed}>
      <div className="sidebarLinksContainer">
        <div className="hamburgerContainer" onClick={hamburgerHandler}>
          {!showHambuger ? (
            <GiHamburgerMenu className={activeHamburger} />
          ) : (
            <IoMdClose className={activeHamburger} />
          )}
          <a href={"#header"}>
            <img className="logoPorfolioham" src={logoPorfolio} alt="" />
          </a>
        </div>
        {links.map((link) => (
          <a key={link.number} href={link.href} className="sideLinkItem">
            {`0${link.number}. ${link.text}`}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
