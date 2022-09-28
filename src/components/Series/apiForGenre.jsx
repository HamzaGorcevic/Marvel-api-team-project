import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import { MyContext } from "../context";
import SeriesPage from "./seriesIndex";

export default function ApiForGenre() {
  const { genre } = useContext(MyContext);
  const location = useLocation();
  const [loader, setLoader] = useState(false);

  const [data, setData] = useState([]);
  const [url, setUrl] = useState(location.state);
  console.log(location.url, "why undef", location.state);

  useEffect(() => {
    setLoader(false);
    async function fetch() {
      let res = await axios.get(url, {
        params: {
          ts: "1",
          apikey: "6dd47b36beb6cba63846697b5616e93e",
          hash: "39e75edb8427b1e58fa9052ef6640cb3",
        },
      });
      setData(res.data.data.results);
      setLoader(true);
    }
    fetch();
  }, [url]);
  return <SeriesPage loader={loader} data={data} />;
}
