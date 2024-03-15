import React from "react";
import "./MyProjectItem.scss";
import DescriptionProject from "./DescriptionProject";
import PhotoProject from "./PhotoProject";
import { motion } from "framer-motion";

const MyProjectItem = ({ project, index }) => {
  const { initial, animate } = {
    initial: index % 2 === 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="projectLayout"
      initial={initial}
      whileInView={animate}
    >
      <DescriptionProject project={project}></DescriptionProject>
      <PhotoProject project={project}></PhotoProject>
    </motion.div>
  );
};

export default MyProjectItem;
