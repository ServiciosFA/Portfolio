import React from "react";
import "./Description.scss";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <div className="descriptionLayout">
      <motion.h1
        className="title"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, staggerChildren: 0.1 }}
      >
        Fernando Acosta
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, staggerChildren: 0.1 }}
        className="descriptionContainer"
      >
        <p className="descriptionTitle">Frontend Developer</p>
        <p className="description">
          Dedicado y con buenas prácticas para garantizar buenos resultados.
        </p>
      </motion.div>
    </div>
  );
};

export default Description;
