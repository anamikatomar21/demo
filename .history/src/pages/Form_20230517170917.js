import React from "react";

const Form = () => {
  // try {
  //     const res = async("https://jsonplaceholder.typicode.com/todos/1");
  //     const result=  res.json();
  // } catch (error) {
  //    console.log(error)
  // }
  const demoArray = [1, 2, 3, 4, 5];
  demoArray.f)

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
