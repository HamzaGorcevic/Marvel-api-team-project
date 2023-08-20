import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import spider from "./spider.jpg";
import { REACT_APP_API_KEY } from "../../config";
export default function Chosen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`${location.state}`);

  useEffect(() => {
    async function fetch() {
      let res = await axios.get(url, {
        params: {
          ts: "1",
          apikey: REACT_APP_API_KEY,
          hash: "39e75edb8427b1e58fa9052ef6640cb3",
        },
      });
      setData(res.data.data.results);
    }
    fetch();
  }, [url]);

  return (
    <div
      className="container-fluid d-flex flex-direction-column align-items-center"
      style={{
        minHeight: "120vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${spider})`,
      }}
    >
      {data.map((items) => {
        return (
          <div className="d-flex flex-column  justify-content-md-around  flex-md-row  w-100 ">
            <div className="container d-flex justify-content-center">
              <img
                style={{ width: "400px", height: "400px" }}
                src={`${items.thumbnail?.path}.${items.thumbnail?.extension}`}
                alt=""
              />
            </div>

            <div className=" text-light p-3 container" style={{ height: 400 }}>
              <h1 className="bg-danger">
                {items.title ? items.title : items.name}
              </h1>
              <p className="my-5 ">
                {" "}
                {items.description
                  ? items.description
                  : "A diverse ensemble of superhuman heroes, each with unique powers and backgrounds, uniting to safeguard the universe from villains and existential threats"}
              </p>

              <div className="d-flex flex-column justify-content-center  align-items-center align-items-md-start  ">
                {items.series?.resourceURI || items.series?.collectionURI ? (
                  <button
                    className=" btn btn-outline-danger w-75 my-2"
                    onClick={() => {
                      navigate("/series", {
                        ...(items.series?.resourceURI
                          ? { state: items.series?.resourceURI }
                          : { state: items.series.collectionURI }),
                      });
                    }}
                  >
                    Go to series
                  </button>
                ) : (
                  ""
                )}
                {items.comics?.resourceURI || items.comics?.collectionURI ? (
                  <button
                    className="btn btn-outline-danger w-75 my-2"
                    onClick={() => {
                      navigate("/series", {
                        ...(items.comics?.resourceURI
                          ? { state: items.comics?.resourceURI }
                          : { state: items.comics.collectionURI }),
                      });
                    }}
                  >
                    Go to comics
                  </button>
                ) : (
                  ""
                )}
                {items.characters?.resourceURI ||
                items.characters?.collectionURI ? (
                  <button
                    className="btn btn-outline-danger w-75 my-2"
                    onClick={() => {
                      navigate("/series", {
                        ...(items.characters?.resourceURI
                          ? { state: items.characters?.resourceURI }
                          : { state: items.characters.collectionURI }),
                      });
                    }}
                  >
                    Go to characters
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex gap-5 ">
                {items.creators?.items.slice(0, 3).map((author) => {
                  return (
                    <div className="text-primary">
                      <h3>{author.name}</h3>
                      <p className="text-light">{author.role}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
