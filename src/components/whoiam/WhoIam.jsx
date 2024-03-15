import React, { useRef } from "react";
import "./WhoIam.scss";
import programmingImage from "../../assets/Images/image-whoIam.jpg";
import Button from "../../ui/Button";
import cv from "../../assets/cv/CV-Fernando Acosta.pdf";
import { motion } from "framer-motion";

const WhoIam = () => {
  const ref = useRef();

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
    <motion.div id="quiensoy" className="quiensoyLayout" ref={ref}>
      <motion.h1
        className="titleQuiensoy"
        initial={initial}
        whileInView={animate}
      >
        01. ¿Quién soy?
      </motion.h1>
      <motion.div
        className="quiensoyContainer"
        initial={initial}
        whileInView={animate}
      >
        <div className="imageContainer">
          <img
            className="image"
            src={programmingImage}
            alt="ProgrammingImage"
          ></img>
        </div>
        <motion.div className="quiensoyTextContainer">
          <p className="quiensoyText">
            Un programador web junior en busca de nuevas oportunidades. Mi
            enfoque se centra en la creación de experiencias web atractivas y
            funcionales. Me especializo en el desarrollo con HTML, CSS,
            JavaScript y ReactJS. He trabajado en diversos proyectos personales
            que me han permitido aplicar y mejorar mis habilidades.
          </p>

          <p className="quiensoyText">
            Mi objetivo es seguir creciendo como desarrollador y contribuir al
            éxito de proyectos innovadores. Estoy entusiasmado por la
            posibilidad de unirme a un equipo dinámico donde pueda aprender y
            aportar mis conocimientos. Siempre estoy abierto a desafíos y me
            esfuerzo por mantener un equilibrio entre la creatividad y la
            eficiencia en mis soluciones.
          </p>
          <motion.div className="descargarcvContainer">
            <a href={cv} download="CV-Fernando Acosta">
              <Button>Descargar CV</Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhoIam;
