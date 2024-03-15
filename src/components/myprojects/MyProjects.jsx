import React from "react";
import MyProjectItem from "./projectItem/MyProjectItem";
import "./MyProjects.scss";
import { projects } from "../../assets/projects";
import { motion } from "framer-motion";

const MyProjects = () => {
  const { initial, animate } = {
    initial: { x: -20, opacity: 0, y: -20 },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div id="projects" className="myprojectsLayout">
      <motion.h1
        initial={initial}
        whileInView={animate}
        className="titleProyectos"
      >
        02. Proyectos
      </motion.h1>
      <ul className="myprojectsContainer">
        {projects.map((project, index) => (
          <MyProjectItem
            key={project.id}
            project={project}
            index={index}
          ></MyProjectItem>
        ))}
      </ul>
    </motion.div>
  );
};

export default MyProjects;
