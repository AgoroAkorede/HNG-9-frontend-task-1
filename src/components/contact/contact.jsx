import React, { useState } from "react";
import "./contact.scss";
import Form from './../form/form';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    const send = await fetch("https://formspree.io/f/mpzndljb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  };
  return (
    <div className="contact">
      <h1 className="contact__header">Contact Me</h1>
      <p>Hi there contact me to ask about anything you have in mind.</p>
      <Form handleSubmitForm={handleSubmitForm}/>
    </div>
  );
};

export default Contact;
