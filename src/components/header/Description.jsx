import React from "react";
import "./Description.scss";

const Description = () => {
  return (
    <div className="descriptionLayout">
      <h1 className="title">Fernando Acosta</h1>
      <div className="descriptionContainer">
        <p className="descriptionTitle">Frontend Developer</p>
        <p className="description">
          Dedicado y con buenas prácticas para garantizar buenos resultados.
        </p>
      </div>
    </div>
  );
};

export default Description;
