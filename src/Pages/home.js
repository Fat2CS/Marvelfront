import "./scss/home.css";
import React from "react";
import Marvel from "../assets/marvelimg.png";
import "../index";
// import { Player } from "video-react";
// import "node_modules/video-react/dist/video-react.scss";

const Home = () => {
  return (
    <div className="header">
      {/* <div className="Player">
        <iframe
          className="player"
          width="1600 px"
          height="715"
          src="https://www.youtube.com/embed/os2C0TdDphc?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
      <video autoplay playsinline muted loop preload poster={Marvel}>
        <source src="https://www.youtube.com/embed/os2C0TdDphc?autoplay=1" />
      </video>

      <svg
        // xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 285 80"
        // preserveAspectRatio="xMidYMid slice"

        svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsxlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="1129"
        height="1117"
        viewBox="0 0 1129 1117"
        xmlspace="preserve"
      >
        <desc>Created with Fabric.js 4.2.0</desc>
        <g
          transform="matrix(1 0 0 1 564.5 558.5)"
          id="99dc652d-a7d7-4faa-bd56-c195807cebeb"
        >
          {/* <rect
            style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
            vector-effect="non-scaling-stroke"
            x="-564.5"
            y="-558.5"
            rx="0"
            ry="0"
            width="1129"
            height="1117"
          /> */}
        </g>
        <g
          transform="matrix(Infinity NaN NaN Infinity 0 0)"
          id="164afe01-240c-48d9-ae0b-b616ca9f89ab"
        ></g>
        <g
          transform="matrix(1 0 0 1 564.5 558.5)"
          // style=""
          id="4571e549-5224-417c-a44e-b2bb266c72e3"
        >
          <text
            xmlspace="preserve"
            font-family="Raleway"
            font-size="105"
            font-style="normal"
            font-weight="900"
            // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 0.77; white-space: pre;"
          >
            <tspan x="-250.27" y="32.98">
              E
            </tspan>
            <tspan x="-147.68" y="32.98">
              N
            </tspan>
            <tspan x="-28.61" y="32.98">
              T
            </tspan>
            <tspan x="76.81" y="32.98">
              E
            </tspan>
            <tspan x="179.39" y="32.98">
              R
            </tspan>
          </text>
        </g>

        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" />
            <text x="72" y="50">
              ENTER
            </text>
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" />
      </svg>
    </div>
  );
};

export default Home;
