import logo from "../img/marvel.jpeg";

import { Link } from "react-router-dom";
import axios from "axios";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Pages/scss/header.scss";
// import { useState, useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [comics, setComics] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setsuggestions] = useState([]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = comics.results.filter((com) => {
        const regex = new RegExp(`${text}`, "gi");
        // return comic.name.matche(regex)
        return com.name.match(regex);
      });
    }
    console.log("matches", matches);
    setsuggestions(matches);
    setText(text);
  };
  return (
    <header>
      <div className="logo">
        <img
          alt="logo"
          src={logo}
          style={{ height: "530px", width: "100%", objectFit: "cover" }}
        />
      </div>

      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div className="text-color" key={i}>
            {suggestion.name}
          </div>
        ))}

      {/* <div className="text-color">{text}</div> */}
      <div className="menu">
        {/* <link to="/">
          <button>Home</button>
        </link> */}
        <Link to="/characters">
          <button>Characters</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <Link to="/comics/charactersid">
          <button>Comics&characters</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
