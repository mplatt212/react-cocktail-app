import React from "react";
import Anime from "react-anime";

const Loading = () => {
  let animeProps = {
    targets: "#loading",
    rotate: "+=360",
    easing: "linear",
    duration: 1000,
    loop: true,
  };
  return (
    <Anime {...animeProps}>
      <div id="loading"></div>;
    </Anime>
  );
};

export default Loading;
