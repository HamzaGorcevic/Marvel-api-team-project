import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./SingleCard";
import { MyContext } from "../context";
import { REACT_APP_API_KEY } from "../config";

export default function HomeMain() {
  const { search, genre, setPage, setLastPage, page, lastPage } =
    useContext(MyContext);

  const [loader, setLoader] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetch() {
      setLoader(true);

      let res = await axios.get(
        `http://gateway.marvel.com/v1/public/${genre}?`,
        {
          params: {
            limit: lastPage,
            ts: "1",
            apikey: REACT_APP_API_KEY,
            hash: "39e75edb8427b1e58fa9052ef6640cb3",
            ...(search && genre !== "comics"
              ? { nameStartsWith: search }
              : search && genre
              ? { titleStartsWith: search }
              : {}),
          },
        }
      );

      setData(res.data.data.results.slice(page, lastPage));
      setLoader(false);
    }

    fetch();
  }, [search, page, genre]);

  function moveToNextPage() {
    setPage(page + 10);
    setLastPage(lastPage + 10);
  }
  function moveToPrevPage() {
    setPage(page - 10);
    setLastPage(lastPage - 10);
  }
  return (
    <div>
      <div style={{ top: 600, position: "relative" }}>
        <div
          className="bg-succes d-flex flex-wrap justify-content-center"
          style={{ height: "auto" }}
        >
          {data.map((item, index) => {
            return <Card loader={loader} item={item} index={index} />;
          })}
          <div className="d-flex p-4 justify-content-around w-100">
            <button
              className="btn btn-danger"
              disabled={page === 0 ? "true" : ""}
              onClick={moveToPrevPage}
            >
              Go to prev page
            </button>
            <button
              className="btn btn-danger"
              disabled={lastPage !== 100 && data.length >= 10 ? "" : "false"}
              onClick={moveToNextPage}
            >
              Go to next page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
