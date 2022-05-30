// const { characterID } = useParams;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

// import { Link } from "react-router-dom";
import "./scss/characters.scss";
//

const Comicscharacters = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const comicsCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/comics/character/${id}`
          // `https://marvelprocess.herokuapp.com/character/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);

        comicsCharacters();
      } catch (error) {
        console.log(error.message);
      }
    };
  }, [id]);

  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div className="cardp">
        {/* <h1>Retrouvez vos Héros Marvel</h1> */}
        {data.results.map((item, index) => {
          console.log(item._id);
          return (
            <section>
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
            //
          );
        })}
      </div>
    </>
  );
};

export default Comicscharacters;
