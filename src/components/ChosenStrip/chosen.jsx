import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarPage from "../Layout/navbar";

export default function Chosen() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const param = useParams();
  const [url, setUrl] = useState(
    `https://gateway.marvel.com/v1/public/characters/${param.id}?`
  );

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
            {console.log(items.id, "on here")}
            <img
              className=""
              style={{ height: 400, width: 300 }}
              src={`${items.thumbnail?.path}.${items.thumbnail?.extension}`}
              alt=""
            />
            <div className="w-50 text-light" style={{ height: 400 }}>
              <h1>{items.title ? items.title : items.name}</h1>
              <p>{items.description}</p>
              <div>
                {items.creators?.items.map((author) => {
                  return <h3>{author.name}</h3>;
                })}
              </div>
              <Link
                className="btn btn-outline-danger"
                to={"/series"}
                state={{ id: items.id, image: items.thumbnail?.path }}
              >
                Go to series
              </Link>

              <p>{items.modified?.slice(0, 10)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
