import "./scss/home.scss";
import React from "react";
import Marvel from "../assets/marvelimg.png";
import { Link } from "react-router-dom";
import "../index";
// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.scss";

const linkStyle = {
  textDecoration: "none"
};

const Home = () => {
  return (
    <div className="header">
      <div className="enter">
        <Link to="/characters" style={linkStyle}>
          <h1>ENTER</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
