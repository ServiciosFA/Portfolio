import React from "react";
import "./Contact.scss";
import EmailForm from "../../ui/EmailForm";
import ListContact from "./ListContact";

const Contact = () => {
  return (
    <div id="contact" className="contactLayout">
      <h2>Contacto</h2>
      <EmailForm></EmailForm>
      <ListContact></ListContact>
    </div>
  );
};

export default Contact;
