import "./App.css";
import Cookies from "js-cookie";
// import "https://fonts.googleapis.com/css2?family=Koulen&display=swap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//les routes
import Characters from "./Pages/characters";
import Header from "./container/header";
import Comics from "./Pages/comics";
import Favorites from "./Pages/favorites";
import Comicscharacters from "./Pages/comicscharacters";
import Home from "./Pages/home";
import Charactersid from "./Pages/charactersid";
import { useState } from "react";
import Signup from "./Pages/signup";
import Login from "./Pages/login";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

// pages

function App() {
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      Cookies.remove("userToken");
    }
  };
  return (
    <div className="App">
      {/* <h1> Bonjour</h1> */}
      <Router>
        <Header handleToken={handleToken} />

        {/* <Header token={token} setUser={setUser} /> */}
        <Routes>
          <Route
            path="/"
            element={<Home />}
            // nameSearch={nameSearch}
            // setnameSearch={setnameSearch}
          />
          <Route path="/characters" element={<Characters />} />
          {/* {/* <Route path="/" element={<Offer />} /> */}
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:id" element={<Comicscharacters />} />
          <Route path="/character/:id" element={<Charactersid />} />

          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
