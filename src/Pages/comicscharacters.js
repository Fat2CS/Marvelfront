// import { useParams } from "react-router-dom";
// const { characterID } = useParams;
import { useState, useEffect } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
import "./scss/characters.scss";
//
const Comicscharacters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  // const [limit, setLimit] = useState(Number);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvelprocess.herokuapp.com/comicscharacters`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);
  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>

      <div className="cardp">
        {/* <h1>Retrouvez vos Héros Marvel</h1> */}
        {data.results.map((item, index) => {
          console.log(item._id);
          return (
            <section>
              <div div className="grid">
                {/* <Link to={`/comicscharacters${item.comics._id}`} key={item._id}> */}
                <div key={index} className="card">
                  <h2>{item.comics.id}</h2>

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
