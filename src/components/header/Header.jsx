import React, { useRef } from "react";
import MyPhoto from "./MyPhoto";
import Description from "./Description";
import "./Header.scss";
import { GiCometSpark } from "react-icons/gi";
import { motion } from "framer-motion";

const Header = () => {
  const ref = useRef();
  return (
    <motion.div className="aboutmeLayout" id="header" ref={ref}>
      <MyPhoto />
      <Description />
      <motion.div
        initial={{ opacity: 0, x: "-20%", y: "-200%" }}
        animate={{ opacity: 1, x: "1500%", y: "1000%" }}
        transition={{ duration: 55, repeat: Infinity }}
        className="slidingTextContainer2"
      >
        <GiCometSpark className="sliderText"> </GiCometSpark>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "10%", y: "-100%" }}
        animate={{ opacity: 1, x: "1000%", y: "1300%" }}
        transition={{ duration: 25, repeat: Infinity }}
        className="slidingTextContainer2"
      >
        <motion.div
          initial={{ opacity: 0, x: "-4%", y: "-150%" }}
          animate={{ opacity: 1, x: "1500%", y: "1200%" }}
          transition={{ duration: 45, repeat: Infinity }}
          className="slidingTextContainer"
        ></motion.div>
        <GiCometSpark className="sliderText"> </GiCometSpark>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "250%", y: "-300%" }}
        animate={{ opacity: 1, x: "1500%", y: "1000%" }}
        transition={{ duration: 40, repeat: Infinity }}
        className="slidingTextContainer3"
      >
        <GiCometSpark className="sliderText"> </GiCometSpark>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-30%", y: "-350%" }}
        animate={{ opacity: 1, x: "1100%", y: "1000%" }}
        transition={{ duration: 30, repeat: Infinity }}
        className="slidingTextContainer3"
      >
        <GiCometSpark className="sliderText"> </GiCometSpark>
      </motion.div>
    </motion.div>
  );
};

export default Header;
