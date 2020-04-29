import React from "react";
import Title from "./Title";

const titles = [{ text: "Hey class 39!" }, { text: "im matias" }];

const ManyTitles = (props) => {
  const titlesToH2 = titles.map((t) => <Title text={t.text} />);

  // [<Title />, <Title />]

  return <div>{titlesToH2}</div>;
};

export default ManyTitles;
