import "./scss/home.scss";
import React from "react";
// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.scss";

const Home = () => {
  return (
    <div className="welcome">
      <div className="enter"> {/* <h1>ENTER</h1>{" "} */}</div>
      <div className="Player">
        {" "}
        <iframe
          className="player"
          width="1600 px"
          height="715"
          src="https://www.youtube.com/embed/os2C0TdDphc?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div>

      {/* <Player /> */}
    </div>
  );
};

export default Home;
