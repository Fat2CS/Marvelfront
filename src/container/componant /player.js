import "~video-react/styles/scss/video-react";

import React from "react";
import { Player } from "video-react";

export default (props) => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://www.youtube.com/embed/os2C0TdDphc?start=1"
      //   title="YouTube video player"
      //   frameborder="0"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //   allowfullscreen
    />
  );
};
