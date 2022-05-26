import { useState, useEffect } from "react";
import axios from "axios";

// import { ReactPaginate } from "react-paginate";

import { Link, useParams } from "react-router-dom";
import "./scss/characters.scss";

// const Per_page = 10;

const Characters = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // const [PageSize, setPageSize] = useState(0);
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response =
        await axios.get // `http://localhost:4001/characters?apiKey=t7a7NjbAUHREgQNr`
        `https://marvelprocess.herokuapp.com/characters`;
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [_id]);

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
                <Link to={`/character/${item._id}`} key={item._id}>
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
                {/* <table>
                  data={data}
                  pagination=
                  {{
                    total: 100,
                    current: Page,
                    PageSize: PageSize,
                    OnChange: (Page, PageSize) => {
                      setPage(Page);
                      setPageSize(PageSize);
                    }
                  }}
                </table>{" "} */}
                {/* <div className="App">{currentPageData}</div>){currentPageData} */}
                {/* <ReactPaginate
                  breakLabel={"<< Previous"}
                  nextLabel={"Next >>"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination_link"}
                  disableClassName={"pagination_link--disabled"}
                  renderOnZeroPageCount={"pagination_link--active"}
                /> */}
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
