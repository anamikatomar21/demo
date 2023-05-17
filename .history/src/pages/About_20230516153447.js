import React from "react";
import { useState } from "react";

const [count, setCount] = useState(0);

const decreaseCount = () => {
  return setCount(count - 1);
};

const
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
