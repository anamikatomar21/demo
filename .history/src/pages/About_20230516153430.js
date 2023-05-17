import React from "react";
import { useState } from "react";

const [count, setCount] = useState(0);

const decreaseCount = () => {
  return setCount(count - 1);
};

const About = () => {
  return (
    <>
      <div onClick={decreaseCount}>-</div>
      {count}
      <div onClick={decreaseCount}>+</div>
    </>
  );
};

export default About;
