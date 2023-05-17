import React from "react";

const Form = () => {
  return (
    <>
      <div>
        <h3>Contact Form</h3>
        <div className="">
          <input type="text" placeholder="Enter your Name.." />
          <input type="email" placeholder="Enter your Email id" />
          <input type="password" placeholder="Enter your Password" />
          <input type="password" placeholder="Confirm your Password" />
        </div>
      </div>
    </>
  );
};

export default Form;
