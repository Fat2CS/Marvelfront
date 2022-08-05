import { useState, useEffect } from "react";
import axios from "axios";

import "./scss/comics.scss";
import Layout from "./Layout";
const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [skip, setSkip] = useState(0);
  const [comics, setComics] = useState();

  const [limit, setlimit] = useState(20);
  const [text, setText] = useState("");
  const [suggestions, setsuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvelprocess.herokuapp.com/comics?apiKey=t7a7NjbAUHREgQNr&limit=${limit}&skip=${skip}`
      );
      console.log(response.data);
      setComics(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [skip, limit]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = comics.results.filter((com) => {
        const regex = new RegExp(`${text}`, "gi");
        // return comic.name.matche(regex)
        return com.title.match(regex);
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
      <Layout>
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
              {suggestion.title}
            </div>
          ))}

        <div className="cardp">
          {data.results.map((item, index) => {
            // console.log(offer._id);
            return (
              <>
                <div className="grid"></div>
                <div key={index} className="cardcomics">
                  <h2>{item.title}</h2>
                  <div className="container">
                    <img
                      className="comics"
                      style={{ height: 300 }}
                      src={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}
                      alt={"heros"}
                    />
                    <div className="overlay">
                      <p className="description">{item.description}</p>
                    </div>
                    <div className="grid"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="pagination">
          <button onClick={() => setSkip(skip - limit)}>Page precedente</button>

          <button onClick={() => setSkip(skip + limit)}>Page suivante</button>
        </div>
      </Layout>
    </>
  );
};

export default Comics;
