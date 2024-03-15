import React from "react";
import "./Contact.scss";
import EmailForm from "../../ui/EmailForm";
import ListContact from "./ListContact";
import { motion } from "framer-motion";

const Contact = () => {
  const { initial, animate } = {
    initial: { x: -20, opacity: 0, y: -20 },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div id="contact" className="contactLayout">
      <motion.div
        className="messageLayout"
        initial={initial}
        whileInView={animate}
      >
        <h1 className="titleContacto">03. Contacto</h1>
        <EmailForm></EmailForm>
      </motion.div>
      <ListContact></ListContact>
    </motion.div>
  );
};

export default Contact;
