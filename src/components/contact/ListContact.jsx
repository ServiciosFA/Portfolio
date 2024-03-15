import React from "react";
import "./ListContact.scss";
import { IoLogoGithub } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Link from "../../ui/Link";
import { motion } from "framer-motion";

const ListContact = () => {
  const { initial, animate, animate2 } = {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    animate2: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <div className="contactContainer">
      <div className="info">
        <h3 className="titleLinks">Info</h3>
        <hr></hr>
        <motion.div initial={initial} whileInView={animate}>
          <Link
            icon={<GiPositionMarker size={"1.5rem"} />}
            description={"Trenque Lauquen, Buenos Aires"}
            url={""}
          ></Link>
        </motion.div>
        <motion.div initial={initial} whileInView={animate2}>
          <Link
            icon={<IoIosMail size={"1.5rem"} />}
            description={"fernando.salli.08@gmail.com"}
            url={""}
          ></Link>
        </motion.div>
      </div>
      <div className="othersLinks">
        <h3 className="titleLinks">Links</h3>
        <hr></hr>
        <motion.div initial={initial} whileInView={animate}>
          <Link
            icon={<FaLinkedin size={"1.5rem"} />}
            description={"LinkedIn"}
            url={"https://www.linkedin.com/in/fernando-acosta-172557239"}
          ></Link>
        </motion.div>
        <motion.div initial={initial} whileInView={animate2}>
          <Link
            icon={<IoLogoGithub size={"1.5rem"} />}
            description={"GitHub"}
            url={"https://github.com/ServiciosFA"}
          ></Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ListContact;
