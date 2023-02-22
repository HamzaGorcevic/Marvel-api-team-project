import ChosenSerie from "./ChosenSeries/chosenSeries";
import { Circles } from "react-loader-spinner";

export default function SeriesPage({ loader, data, title }) {
  function MoveLeft() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 800;
  }
  function MoveRight() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 800;
  }

  return (
    <div>
      {loader ? (
        <div
          className="container-fluid bg-warning"
          style={{ minHeight: "100vh", paddingTop: "40px", fontWeight: "bold" }}
        >
          <h1 className="text-white">
            {title
              .match(/comics|characters|series/gi)
              .reverse()
              .join(" of this ")
              .slice(0, -1)}
          </h1>
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
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
          }}
        >
          <Circles
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
    </div>
  );
}
