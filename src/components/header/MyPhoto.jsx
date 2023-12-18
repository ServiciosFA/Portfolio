import React from "react";
import "./MyPhoto.scss";
import avatar from "../../assets/Images/avatar portfolio.png";

const MyPhoto = () => {
  return (
    <div className="photoContainer">
      <img className="photo" src={avatar} alt="Avatar"></img>
    </div>
  );
};

export default MyPhoto;
