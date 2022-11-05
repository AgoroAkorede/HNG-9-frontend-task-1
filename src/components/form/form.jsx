import React, { useState } from "react";
import "./form.scss";

const Form = ({handleSubmitForm}) => {

  return (
    <div>
      <form
        className="form"
        name="contact"
        method="post"
        action="https://formspree.io/f/mpzndljb"
        onSubmit={handleSubmitForm}
      >
        <label className="check">
          <input type="checkbox" />
          <span>You agree to sending your data to Agoro Akorede who may contact you?</span>
        </label>

        <button className="form__button">Send message</button>
      </form>
    </div>
  );
};

export default Form;
