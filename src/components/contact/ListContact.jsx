import React from "react";
import "./ListContact.scss";
import { IoLogoGithub } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Link from "../../ui/Link";

const ListContact = () => {
  return (
    <div className="contactContainer">
      <div className="info">
        <h3 className="titleLinks">Info</h3>
        <hr></hr>
        <Link
          icon={<GiPositionMarker size={"1.5rem"} />}
          description={"Trenque Lauquen, Buenos Aires"}
          url={""}
        ></Link>
        <Link
          icon={<IoIosMail size={"1.5rem"} />}
          description={"fernando.salli.08@gmail.com"}
          url={""}
        ></Link>
      </div>
      <div className="othersLinks">
        <h3 className="titleLinks">Links</h3>
        <hr></hr>
        <Link
          icon={<FaLinkedin size={"1.5rem"} />}
          description={"LinkedIn"}
          url={"https://www.linkedin.com/in/fernando-acosta-172557239"}
        ></Link>
        <Link
          icon={<IoLogoGithub size={"1.5rem"} />}
          description={"GitHub"}
          url={"https://github.com/ServiciosFA"}
        ></Link>
      </div>
    </div>
  );
};

export default ListContact;
