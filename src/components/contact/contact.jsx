import React, { useState } from "react";
import classes from "./contact.module.scss";
import Form from "./../form/form";
import InputField from "./../InputField/InputField";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const data = new FormData(form);
    console.log(data);

    const send = await fetch(
      "https://getform.io/f/41eb00d4-d753-403f-84fb-4a9ae17737e9",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );
    
  };

  return (
    <div className={classes.contact}>
      <h1 className={classes.contact__header}>Contact Me</h1>
      <p className={classes.subtext}>
        Hi there contact me to ask about anything you have in mind.
      </p>
      <div className={classes["name-container"]}>
        <InputField
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          className={classes.nameField}
          classNameC={classes.div}
          classNameL={classes.label}
          classNameI={classes.input}
          id="first name"
        />

        <InputField
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          className={classes.nameField}
          classNameC={classes.div}
          classNameL={classes.label}
          classNameI={classes.input}
          id="last name"
        />
      </div>

      <InputField
        label="Email"
        type="email"
        placeholder="yourname@email.com"
        classNameC={classes.div}
        classNameL={classes.label}
        classNameI={classes.input}
        id="email"
      />

      <div className={classes.div}>
        <label htmlFor="message" className={classes.label}>
          Message
        </label>
        <textarea
          className={classes.input}
          placeholder="Send me a message and I'll reply you as soon as possible"
          id="message"
        />
      </div>
      <Form handleSubmitForm={handleSubmitForm} />
    </div>
  );
};

export default Contact;
