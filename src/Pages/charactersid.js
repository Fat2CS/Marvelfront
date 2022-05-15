import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import "./scss/characters.scss";
//
const Charactersid = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const { id } = useParams();
  console.log(id.CharactersID);
  // const [limit, setLimit] = useState(Number);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvelprocess.herokuapp.com/characters/character${id.CharactersID}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id.CharactersID]);
  // console.log(data.id);
  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>

      <div className="cardp">
        <div className="lenomduhéros">
          <h1>{data.name[0]}</h1>
          console.log(data.name)
        </div>
        {/* <h1>Retrouvez vos Héros Marvel</h1> */}
        {data.results.map((item, index) => {
          console.log();
          return (
            <section>
              <div div className="grid">
                <div key={index} className="card">
                  <h2>{item.name}</h2>

                  <img
                    className="portrait"
                    style={{ height: 300 }}
                    src={`${item.thumbnail.path}/standard_large.${item._id.thumbnail.extension}`}
                    alt={"heros"}
                  />
                  <div></div>

                  <p className="description">{item.description}</p>
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

export default Charactersid;
