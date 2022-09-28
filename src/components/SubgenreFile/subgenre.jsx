import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ChosenSerie from "../Series/ChosenSerie/chosenSerie";
import SeriesPage from "../Series/seriesIndex";
import { MyContext } from "../context";

export default function Subgenre() {
  const { genre } = useContext(MyContext);
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/${
      genre === "characters" ? "series" : genre
    }/${location.state}/characters?`
  );

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
