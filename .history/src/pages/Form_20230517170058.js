import React from "react";

const Form = () => {

    const res =

  return (
    <>
      <div>
        <h3>Contact Form</h3>
        <div className="form-section">
          <input type="text" placeholder="Enter your Name.." />
          <input type="email" placeholder="Enter your Email id" />
          <input type="password" placeholder="Enter your Password" />
          <input type="password" placeholder="Confirm your Password" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Form;
