// const { characterID } = useParams;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

// import { Link } from "react-router-dom";
import "./scss/characters.scss";
import "./scss/comicscharacters.scss";
// import "../index";
//

const Comicscharacters = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const comicsCharacters = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4001/comics/${id}`
          `https://marvelprocess.herokuapp.com/comics/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    comicsCharacters();
  }, [id]);

  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <main>
        <div className="grids">
          <div className="heroname">
            <h1>{data.name}</h1>
          </div>
          console.log(data)
          <div className="container">
            <img
              className="portraitsolo"
              style={{ height: 200 }}
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt={"heros"}
            />
          </div>
        </div>

        <div className="cardp">
          {/* <h1>Retrouvez vos Héros Marvel</h1> */}
          {data.comics.map((item, index) => {
            console.log(item.name);

            return (
              <section className="comicsemp">
                <div div className="grid">
                  {/* <Link to={`/comicscharacters${item.comics._id}`} key={item._id}> */}
                  <div key={index} className="card">
                    <h2>{item.title}</h2>

                    <img
                      className="portrait"
                      style={{ height: 300 }}
                      src={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}
                      alt={"heros"}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Comicscharacters;
