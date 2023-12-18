import React from "react";
import MyPhoto from "./MyPhoto";
import Description from "./Description";
import "./Header.scss";

const Header = () => {
  return (
    <div className="aboutmeLayout">
      <MyPhoto></MyPhoto>
      <Description></Description>
    </div>
  );
};

export default Header;
