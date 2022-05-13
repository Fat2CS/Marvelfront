import { useState, useEffect } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvelprocess.herokuapp.com/comics`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div>
        <h1>Retrouvez vos Héros Marvel</h1>
        {data.results.map((item, index) => {
          // console.log(offer._id);
          return (
            // <Link to={`/offer/${offer._id}`} key={offer._id}>
            <main>
              <div key={index} className="card">
                <h2>{item.title}</h2>
                <img
                  className="portrait"
                  style={{ height: 300 }}
                  src={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}
                  alt={"heros"}
                />
                <p className="description">{item.description}</p>
              </div>
            </main>
            // </Link>
          );
        })}
      </div>

      {/* return (
    {data.results.name.map((index)=> {
    return ( <h2>{data.results.name}</h2>))} */}
    </>
  );
};

export default Comics;
