import React from "react";
import "./MyPhoto.scss";
import avatar from "../../assets/Images/avatar portfolio.png";
import { motion } from "framer-motion";

const MyPhoto = () => {
  return (
    <motion.div
      className="photoContainer"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <img className="photo" src={avatar} alt="Avatar"></img>
    </motion.div>
  );
};

export default MyPhoto;
