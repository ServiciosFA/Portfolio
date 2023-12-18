import React from "react";
import MyProjectItem from "./projectItem/MyProjectItem";
import "./MyProjects.scss";
import { projects } from "../../assets/projects";

const MyProjects = () => {
  return (
    <div id="projects" className="myprojectsLayout">
      <ul className="myprojectsContainer">
        {projects.map((project) => (
          <MyProjectItem key={project.id} project={project}></MyProjectItem>
        ))}
      </ul>
    </div>
  );
};

export default MyProjects;
