import React, { useState } from "react";

// Show and keep track of likes (on some post)
// numLikes / showing it / changing it

const LikeCounter = () => {
  const [nrLikes, setLikes] = useState(0);

  const addLike = () => {
    console.log("clicked add like!");
    setLikes(nrLikes + 1);
  };

  const decreaseLike = () => {
    console.log("clicked add like!");
    setLikes(nrLikes - 1);
  };
  return (
    <div>
      <p>This is post has {nrLikes} likes</p>
      <button onClick={addLike}>Like!</button>
      <button onClick={decreaseLike}>Unlike!</button>
    </div>
  );
};

export default LikeCounter;
