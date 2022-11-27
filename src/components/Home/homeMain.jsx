import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./SingleCard";
import { MyContext } from "../context";
import { Circles } from "react-loader-spinner";

export default function HomeMain() {
  const { search, genre, setPage, setLastPage, page, lastPage } =
    useContext(MyContext);

  const [loader, setLoader] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      setLoader(true);

      let res = await axios.get(
        `https://gateway.marvel.com/v1/public/${genre}?`,
        {
          params: {
            limit: lastPage,
            ts: "1",
            apikey: "6dd47b36beb6cba63846697b5616e93e",
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
          className="d-flex flex-wrap justify-content-center"
          style={{ background: "#4169E1", height: "auto" }}
        >
          {loader ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                bottom: "0",
                background: "#fcfcfc59",
                zIndex: 10,
              }}
            >
              <Circles
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          ) : (
            ""
          )}
          {data.map((item, index) => {
            return <Card item={item} index={index} />;
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
