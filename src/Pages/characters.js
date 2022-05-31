import { useState, useEffect } from "react";
import axios from "axios";

// import { ReactPaginate } from "react-paginate";

import { Link, useParams } from "react-router-dom";
import "./scss/characters.scss";

// const Per_page = 10;

const Characters = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  let page = 1;
  // const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [name, setName] = useState("");
  const [limit] = useState(20);
  const [suggestions, setsuggestions] = useState([]);

  // const [PageSize, setPageSize] = useState(0);
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4001/characters?limit=${limit}&skip=${skip}&name=${name}`
      );
      // `https://marvelprocess.herokuapp.com/characters?limit=10&skip=10&name=ve`;
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [skip]);

  const onChangeHandler = (event) => {
    let value = event.target.value;
    value.lenght > 2 && setName(value);
    // let matches = [];
    // if (name.length > 0) {
    //   matches = name.results.filter((com) => {
    //     const regex = new RegExp(`${name}`, "gi");
    // return com.setName.match(regex);
  };

  return isLoading === true ? (
    <div> En cours de chargement </div>
  ) : (
    <>
      <div className="research">
        <input
          type="text"
          name="search"
          placeholder="Search Hero ..."
          onChange={onChangeHandler}
          // value={name}
        />
      </div>

      <div className="search_results">
        {/* //onrecupere la valeur et on la map sur notre liste  */}
        {data
          .filter((val) => {
            return val.name.toLowerCase().includes(name.toLowerCase); // pour plus de précison on rajoute tolowercase
          })
          .map((val) => {
            return (
              <div className="search_result" key={val.id}>
                {val.name}
              </div>
            );
          })}
      </div>

      {/* </div>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div className="text-color" key={i}>
            {suggestion.name}
          </div>
        ))} */}

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
      {/* //pagination  */}
      <div>
        <button onClick={() => setSkip(skip - limit)}>Page precedente</button>

        <button onClick={() => setSkip(skip + limit)}>Page suivante</button>
      </div>
    </>
  );
};
export default Characters;
