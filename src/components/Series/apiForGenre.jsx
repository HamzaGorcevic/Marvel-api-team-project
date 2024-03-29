import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SeriesPage from "./seriesIndex";
import { REACT_APP_API_KEY } from "../config";

export default function ApiForGenre() {
  const location = useLocation();
  const [loader, setLoader] = useState(false);

  const [data, setData] = useState([]);
  const [url] = useState(location.state);
  useEffect(() => {
    setLoader(false);
    async function fetch() {
      let res = await axios.get(url, {
        params: {
          ts: "1",
          apikey: REACT_APP_API_KEY,
          hash: "39e75edb8427b1e58fa9052ef6640cb3",
        },
      });
      setData(res.data.data.results);
      setLoader(true);
    }
    fetch();
  }, [url]);
  return <SeriesPage loader={loader} data={data} title={url} />;
}
