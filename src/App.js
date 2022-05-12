import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//les routes
import Characters from "./Pages/characters";
import Header from "./container/header";
import Comics from "./Pages/comics";
import Favorites from "./Pages/favorites";
import Comicscharacters from "./Pages/comicscharacters";
import Home from "./Pages/home";

// pages

function App() {
  return (
    <div className="App">
      {/* <h1> Bonjour</h1> */}
      <Router>
        <Header />
        {/* <Header token={token} setUser={setUser} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          {/* {/* <Route path="/" element={<Offer />} /> */}
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/charactererId" element={<Comicscharacters />} />
          <Route path="/character/characterId" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
