import React from "react";
import "./WhoIam.scss";
import programmingImage from "../../assets/Images/image-whoIam.jpg";
import Button from "../../ui/Button";
import cv from "../../assets/cv/CV-Fernando Acosta.pdf";

const WhoIam = () => {
  return (
    <div id="quiensoy" className="quiensoyLayout">
      <h1 className="titleQuiensoy">Quíen soy?</h1>
      <div className="quiensoyContainer">
        <div className="imageContainer">
          <img
            className="image"
            src={programmingImage}
            alt="ProgrammingImage"
          ></img>
        </div>
        <div className="quiensoyTextContainer">
          <p className="quiensoyText">
            Un apasionado programador web junior en busca de nuevas
            oportunidades. Mi enfoque se centra en la creación de experiencias
            web atractivas y funcionales. Me especializo en el desarrollo con
            HTML, CSS, JavaScript y ReactJS. He trabajado en diversos proyectos
            personales que me han permitido aplicar y mejorar mis habilidades.
          </p>

          <p className="quiensoyText">
            Mi objetivo es seguir creciendo como desarrollador y contribuir al
            éxito de proyectos innovadores. Estoy entusiasmado por la
            posibilidad de unirme a un equipo dinámico donde pueda aprender y
            aportar mis conocimientos. Siempre estoy abierto a desafíos y me
            esfuerzo por mantener un equilibrio entre la creatividad y la
            eficiencia en mis soluciones.
          </p>
          <a href={cv} download="CV-Fernando Acosta">
            <Button>Descargar CV</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhoIam;
