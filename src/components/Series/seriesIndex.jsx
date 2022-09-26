import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Chosen from "../ChosenStrip/chosen";
import ChosenSerie from "../ChosenSerie/chosenSerie";

export default function SeriesPage() {
  const location = useLocation();
  console.log(location.state.id, location.state.id);
  console.log("ssd");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    `https://gateway.marvel.com/v1/public/characters/${location.state.id}/series`
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
      console.log(res.data.data.results);
      console.log(data, "hello in series");
    }
    fetch();
  }, [url]);

  function MoveLeft() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 800;
  }
  function MoveRight() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 800;
  }
  return (
    <div
      className="container-fluid bg-dark"
      style={{ height: "auto", paddingTop: "40px", fontWeight: "bold" }}
    >
      <h1 className="text-white">Series</h1>
      <div
        className={`d-flex align-items-center`}
        style={{ position: "relative" }}
      >
        <i
          onClick={MoveLeft}
          className={` bi bi-arrow-left-circle-fill text-white h1`}
          style={{ position: "absolute", left: "0", zIndex: 4 }}
        ></i>
        <div
          id="slider"
          style={{
            overflow: "hidden",
            scrollBehavior: "smooth",
            position: "relative",
          }}
        >
          <div className={`d-flex py-5 `} style={{ position: "relative" }}>
            {data.map((items) => {
              return <ChosenSerie items={items} />;
            })}
          </div>
        </div>

        <i
          onClick={MoveRight}
          className={`bi bi-arrow-right-circle-fill text-white h1`}
          style={{ position: "absolute", right: "0", zIndex: 4 }}
        ></i>
      </div>
    </div>
  );
}
