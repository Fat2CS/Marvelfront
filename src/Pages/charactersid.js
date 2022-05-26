import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import "./scss/charactersid.scss";
const Charactersid = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(0);
  const { id } = useParams();
  console.log(id.CharactersID);
  // const [limit, setLimit] = useState(Number);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        // `http://localhost:4001/character/${id}`
        `https://marvelprocess.herokuapp.com/character/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  // console.log(data.id);
  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div className="block">
        <div className="cardp">
          <div div className="grid">
            <div key={data._id} className="card">
              <h2>{data.name}</h2>

              <img
                className="portrait"
                style={{
                  height: "500px",
                  imageresolution: "from-image 300dpi"
                }}
                src={`${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`}
                alt={"heros"}
              />

              <p className="description">{data.description}</p>
            </div>
            <div className="comicslist"></div>
          </div>
        </div>
        <div>
          {/* {data.comics.map((comic) => {
              return (
                <div>
                  <h3>{comic.tittle}</h3>

                  <img
                    src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                    alt={data.name}
                  />
                </div>
              );
            })} */}
        </div>
      </div>
    </>
  );
};

export default Charactersid;
