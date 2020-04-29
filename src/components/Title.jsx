import React, { useState } from "react";

const Title = (props) => {
  // props -> we get from parent components

  // button that if i press the title switches to red
  const [toggleRed, setToggleRed] = useState(false); // true || false

  const onButtonClick = () => {
    console.log("change color!");
    setToggleRed(!toggleRed);
  };

  // color = dependingOnSomething ? black : red;
  const textColor = toggleRed ? "red" : "white";

  return (
    <div>
      <h2 style={{ color: textColor }}>{props.text}</h2>
      <button onClick={onButtonClick}>Toggle color!</button>
    </div>
  );
};

export default Title;
