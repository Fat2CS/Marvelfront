import { useState, useEffect } from "react";
import axios from "axios";

// import { ReactPaginate } from "react-paginate";

// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./scss/characters.scss";
// import Comics from "./comics";

// const Per_page = 10;

const Characters = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // let page = 1;
  // const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [character, setcharacter] = useState();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  // const [limit, setLimit] = useState(20);`

  const limit = 20;

  const [suggestions, setsuggestions] = useState([]);

  // const [PageSize, setPageSize] = useState(0);
  // const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response =
        await axios.get // `http://localhost:4001/characters?limit=${limit}&skip=${skip}&name=${name}`
        `https://marvelprocess.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${name}`;

      console.log(response.data);
      setcharacter(response.data);
      setName(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [skip]);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = character.results.filter((com) => {
        const regex = new RegExp(`${text}`, "gi");
        // return comic.name.matche(regex)
        return com.name.match(regex);
      });
    }
    console.log("matches", matches);
    setsuggestions(matches);
    setText(text);
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
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
      </div>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div className="text-color" key={i}>
            {suggestion.name}
          </div>
        ))}

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
