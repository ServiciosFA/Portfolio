import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.scss";
import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const greaterThanFive = (value) => {
  const check = value && value.trim().length > 4;
  return { check, message: "Necesitas 5 o mas caracteres" };
};
const isEmail = (value) => {
  const check = value && value.includes("@");
  return { check, message: "Debes incluir @ en tu correo" };
};

const EmailForm = () => {
  const form = useRef();
  const [isLoading, setIsloading] = useState(false);
  const [hasError, setHaserror] = useState(false);

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
    message: messsageName,
  } = useForm(greaterThanFive);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
    message: messsageEmail,
  } = useForm(isEmail);
  const {
    value: subject,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
    message: messsageSubject,
  } = useForm(greaterThanFive);
  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
    message: messsageMessage,
  } = useForm(greaterThanFive);

  const reset = (e) => {
    resetMessage();
    resetSubject();
    resetemail();
    resetUserName();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setHaserror(false);
    setIsloading(true);
    emailjs
      .sendForm(
        "service_bmys04b",
        "template_ek22k9e",
        form.current,
        "8OGnII6Mp6TtHhHVE"
      )
      .then(
        (result) => {
          toast.success("¡Correo enviado con éxito!");
          console.log();
          setIsloading(false);
          reset();
        },
        (error) => {
          toast.error("Hubo un error al enviar el correo.");
          setHaserror(true);
        }
      );
  };

  const isFormValid =
    userNameIsValid && emailIsValid && subjectIsValid && messageIsValid;

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="formLayout">
      <div className="inputContainer">
        <Input
          placeholder="Nombre"
          type="text"
          name="user_name"
          id="name"
          label="Nombre"
          onChange={userNameChangeHandler}
          onBlur={userNameBlurHandler}
          value={userName}
          hasError={userNameHasError}
          message={messsageName}
        ></Input>
        <Input
          placeholder="Correo electrónico"
          type="text"
          name="user_email"
          id="email"
          label="Correo electrónico"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
          hasError={emailHasError}
          message={messsageEmail}
        ></Input>
        <Input
          placeholder="Asunto"
          type="text"
          name=""
          id="asunto"
          label="Asunto"
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
          value={subject}
          hasError={subjectHasError}
          message={messsageSubject}
        ></Input>
      </div>
      <div className="messageLayout">
        <textarea
          placeholder="Mensaje..."
          id="message"
          name="message"
          className={messageHasError ? "message error" : "message"}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={message}
          required
        ></textarea>
        <div className="buttonContainer">
          <Button disabled={!isFormValid || isLoading}>Enviar</Button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default EmailForm;
