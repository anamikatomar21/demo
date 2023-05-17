import React from "react";

const [count, setCount] = useState(0);
setCount()

const About = () => {
  return (
    <>
      <div>-</div>
      {count}
      <div>+</div>
    </>
  );
};

export default About;
