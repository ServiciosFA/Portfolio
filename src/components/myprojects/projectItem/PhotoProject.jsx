import React from "react";
import "./PhotoProject.scss";
import Button from "../../../ui/Button";

const PhotoProject = ({ project }) => {
  return (
    <div className="photoLayout">
      <div className="photoContainer">
        <img className="photoProject" src={project.image} alt=""></img>
      </div>
      <div className="buttonPanel" target="_blank" rel="noopener noreferrer">
        <a href={project.demo}>
          <Button>Demo</Button>
        </a>
        <a href={project.ref} target="_blank" rel="noopener noreferrer">
          <Button>Github</Button>
        </a>
      </div>
    </div>
  );
};

export default PhotoProject;
