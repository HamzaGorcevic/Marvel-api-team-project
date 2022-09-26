import HomePage from "./HomeBackground";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./SingleCard";
import NavbarPage from "../Layout/navbar";
import { MyContext } from "../context";

export default function HomeMain() {
  const { search } = useContext(MyContext);
  const [url, setUrl] = useState(
    `https://gateway.marvel.com/v1/public/characters?`
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      let res = await axios.get(url, {
        params: {
          ts: "1",
          apikey: "6dd47b36beb6cba63846697b5616e93e",
          hash: "39e75edb8427b1e58fa9052ef6640cb3",
          ...(search ? { nameStartsWith: search } : {}),
        },
      });
      setData(res.data.data.results);
      console.log(data);
    }
    fetch();
  }, [url, search]);

  return (
    <div>
      <div style={{ top: 600, position: "relative" }}>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ background: "white", height: "auto" }}
        >
          {data.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
