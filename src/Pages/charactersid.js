import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import "./scss/charactersid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div>
        <div className="block1">
          <div className="cardp">
            <div div className="grid1">
              <div key={data._id} className="card">
                <h2>{data.name}</h2>
                <div className="picture">
                  <img
                    className="portrait"
                    style={{
                      height: "400px",
                      imageresolution: "from-image 300dpi"
                    }}
                    src={`${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`}
                    alt={"heros"}
                  />
                </div>
              </div>
              <div className="descriptionci1">
                <p className="descriptionci2">{data.description}</p>
              </div>
            </div>

            <div className="liencomics">
              <Link to={`/comics/${data._id}`}>
                <div className="butarrows">
                  <button>Come here to know the comics of your hero</button>
                  {/* <div className="arrowsbl">
                    <FontAwesomeIcon
                      className="arrows"
                      icon="fa-solid fa-angles-right"
                    />
                  </div> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charactersid;
