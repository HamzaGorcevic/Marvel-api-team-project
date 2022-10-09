import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../context";

export default function Chosen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`${location.state}?`);
  useEffect(() => {
    async function fetch() {
      let res = await axios.get(url, {
        params: {
          ts: "1",
          apikey: "6dd47b36beb6cba63846697b5616e93e",
          hash: "39e75edb8427b1e58fa9052ef6640cb3",
        },
      });
      setData(res.data.data.results);
    }
    fetch();
  }, [url]);

  return (
    <div
      className="container-fluid bg-dark d-flex flex-direction-column align-items-center"
      style={{ height: "100vh" }}
    >
      {data.map((items) => {
        return (
          <div className="d-flex justify-content-around w-100 ">
            {console.log(items)}
            <div>
              <img
                className=""
                style={{ height: 400, width: 300 }}
                src={`${items.thumbnail?.path}.${items.thumbnail?.extension}`}
                alt=""
              />
              <p>{items.modified?.slice(0, 10)}</p>
            </div>
            <div className="w-50 text-light" style={{ height: 400 }}>
              <h1>{items.title ? items.title : items.name}</h1>
              <p>{items.description}</p>

              {items.series?.resourceURI || items.series?.collectionURI ? (
                <button
                  className="btn btn-outline-danger"
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
                  className="btn btn-outline-danger"
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
                  className="btn btn-outline-danger"
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

              <div className="d-flex justify-content-between">
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
