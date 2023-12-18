import React from "react";
import "./AppLayout.scss";
import NavBar from "../ui/NavBar";
import Header from "./header/Header";
import WhoIam from "./whoiam/WhoIam";
import MyProjects from "./myprojects/MyProjects";
import Contact from "./contact/Contact";

const AppLayout = () => {
  return (
    <div className="appLayoutContainer">
      <NavBar></NavBar>
      <Header></Header>
      <WhoIam></WhoIam>
      <MyProjects></MyProjects>
      <Contact></Contact>
    </div>
  );
};

export default AppLayout;
