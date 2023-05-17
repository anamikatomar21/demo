import React from "react";
import { useState } from "react";


const About = () => {
  return (
    <>
      <div onClick={decreaseCount}>-</div>
      {count}
      <div onClick={increaseCount}>+</div>
    </>
  );
};

export default About;
