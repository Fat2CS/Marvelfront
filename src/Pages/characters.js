import { useState, useEffect } from "react";
import axios from "axios";
// import { ReactDOM } from "react";
// import { ReactPaginate } from "react-paginate";

import { Link, useParams } from "react-router-dom";
import "./scss/characters.scss";

// const Per_page = 10;

const Characters = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(0);
  const { _id } = useParams();
  // const [limit, setLimit] = useState(Number);

  // function handlePageClick({ selected: selectedPage }) {
  //   console.log("selectegPage", selectedPage);
  //   setCurrentPage(selectedPage);
  // }
  // const offset = currentPage * Per_page;
  // console.log("offset", offset);

  // const pageCount = Math.ceil(data.length / Per_page);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvelprocess.herokuapp.com/characters`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [_id]);

  // const currentPageData = data;
  // .slice(offset, offset + Per_page)
  // .map((res, index) => (
  //   <img
  //     key={index}
  //     src={`${index.thumbnail.path}/standard_large.${index.thumbnail.extension}`}
  //   />
  // ));

  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div className="cardp">
        {/* <h1>Retrouvez vos Héros Marvel</h1> */}
        {data.results.map((item, index) => {
          console.log();
          return (
            <section>
              <div div className="grid">
                <Link to={`/character.${item._id}`} key={item._id}>
                  <div key={index} className="card">
                    <h2>{item.name}</h2>

                    <img
                      className="portrait"
                      style={{ height: 300 }}
                      src={`${item.thumbnail.path}/standard_large.${item.thumbnail.extension}`}
                      alt={"heros"}
                    />

                    <p className="description">{item.description}</p>
                  </div>
                </Link>
              </div>

              <div>
                {" "}
                {/* return(
                <div className="App">{currentPageData}</div>){currentPageData}
                <ReactPaginate
                  breakLabel={"<< Previous"}
                  nextLabel={"Next >>"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination_link"}
                  disableClassName={"pagination_link--disabled"}
                  renderOnZeroPageCount={"pagination_link--active"} */}
                {/* /> */}
              </div>
            </section>
            //
          );
        })}
      </div>
      //{" "}
    </>
  );
};

export default Characters;
