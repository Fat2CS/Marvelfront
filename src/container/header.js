import logo from "../img/marvel.jpeg";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Pages/scss/header.scss";

import { useState } from "react";

const Header = () => {
  const [suggestions, setsuggestions] = useState([]);

  return (
    <header>
      <div className="connexion">
        <div className="login2">
          <div className="icon1">
            <FontAwesomeIcon
              className="user"
              icon="fa-solid fa-user-astronaut"
              fixedWidth
            />
          </div>
          <div>
            <h5>login</h5>
          </div>
        </div>

        <div className="login3">
          <div className="icon1">
            <FontAwesomeIcon
              className="user"
              icon="fa-solid fa-user-pen"
              fixedWidth
            />
          </div>
          <div>
            <h5>REGISTER </h5>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* <div className="connexion">
        <Link to="/login">
          <div className="buttonlog">
            <div className="fonticon">
              <FontAwesomeIcon
                className="user"
                icon="fa-solid fa-user-astronaut"
              />
            </div>
            <div className="login">
              <div className="logtext">
                <h4>login</h4>
              </div>
            </div>
          </div>
        </Link>

        <div>
          <Link to="/signup">
            <div className="signup">
              <FontAwesomeIcon className="sign" icon="fa-solid fa-user-pen" />
              <div className="register">
                <button className="signup butt">register</button>
              </div>
            </div>
          </Link>
        </div>
      </div> */}

      <div className="logo">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: "300px",
              width: "100vw",
              objectFit: "cover",
              alignItems: "center",
              marginLeft: "-8px"
            }}
          />
        </Link>
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
        <div className="hiddenboot">
          <Link to="/signup">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
