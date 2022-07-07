import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./scss/characters.scss";

const Characters = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [character, setcharacter] = useState();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [limit, setLimit] = useState(20);

  const [suggestions, setsuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvelprocess.herokuapp.com/characters?limit=20&skip=${skip}&name=${name}`
      ); // `http://localhost:4001/characters?limit=${limit}&skip=${skip}&name=${name}`
      console.log(response.data);
      setcharacter(response.data);
      setName(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [skip, name]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = character.results.filter((com) => {
        const regex = new RegExp(`${text}`, "gi");
        // return comic.name.matche(regex)
        return com.name.match(regex);
      });
    }
    console.log("matches", matches);
    setsuggestions(matches);
    setText(text);
  };

  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div className="research">
        <input
          type="text"
          name="search"
          placeholder="Search Hero ..."
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
      </div>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div className="text-color" key={i}>
            {suggestion.name}
          </div>
        ))}

      <div className="cardp">
        {/* <h1>Retrouvez vos Héros Marvel</h1> */}
        {data.results.map((item, index) => {
          console.log();
          return (
            <section>
              <div div className="grid">
                <Link to={`/character/${item._id}`} key={item._id}>
                  <div key={index} className="card">
                    <h2>{item.name}</h2>
                    <div className="container ">
                      <img
                        className="portrait"
                        style={{ height: 300 }}
                        src={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}
                        alt={"heros"}
                      />
                      <div className="overlay">
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div></div>
            </section>
            //
          );
        })}
      </div>
      {/* //pagination  */}
      <div className="pagination">
        <button onClick={() => setSkip(skip - limit)}>Page precedente</button>

        <button onClick={() => setSkip(skip + limit)}>Page suivante</button>
      </div>
    </>
  );
};
export default Characters;
