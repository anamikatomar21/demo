import React from "react";

const [count, setCount] = useState(0);

const About = () => {
  return (
    <>
      <div onClick={decreaseCount}>-</div>
      {count}
      <div>+</div>
    </>
  );
};

export default About;
