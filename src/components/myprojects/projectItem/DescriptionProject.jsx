import React from "react";
import "./DescriptionProject.scss";

const DescriptionProject = ({ project }) => {
  return (
    <div className="descriptionContainer">
      <h3 className="titleProject">{project.name}</h3>
      <hr></hr>
      <p className="descriptionText">{project.description}</p>
      <ul className="iconsTecnologies">
        {project.iconsUrl.map((iconsUrl, i) => (
          <img key={i} src={iconsUrl} alt="" className="icon"></img>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionProject;
