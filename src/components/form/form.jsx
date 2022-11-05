import React, { useState } from "react";
import "./form.scss";

const Form = ({handleSubmitForm}) => {

  return (
    <div>
      <form
        className="form"
        name="contact"
        method="post"
        action="https://getform.io/f/41eb00d4-d753-403f-84fb-4a9ae17737e9"
        onSubmit={handleSubmitForm}
      >
        <label className="check">
          <input type="checkbox" />
          <span className="check__info">You agree to sending your data to Akorede who may contact you?</span>
        </label>

        <button className="form__button">Send message</button>
      </form>
    </div>
  );
};

export default Form;
