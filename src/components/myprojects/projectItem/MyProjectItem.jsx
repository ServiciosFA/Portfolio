import React from "react";

import Button from "../../../ui/Button";
import "./MyProjectItem.scss";
import DescriptionProject from "./DescriptionProject";
import PhotoProject from "./PhotoProject";

const MyProjectItem = ({ project }) => {
  return (
    <div className="projectLayout">
      <DescriptionProject project={project}></DescriptionProject>
      <PhotoProject project={project}></PhotoProject>
    </div>
  );
};

export default MyProjectItem;
