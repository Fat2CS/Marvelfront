import logo from "../img/marvel.jpeg";

import { Link } from "react-router-dom";

import "../Pages/scss/header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          alt="logo"
          src={logo}
          style={{ height: "530px", width: "100%", objectFit: "cover" }}
        />
      </div>
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
