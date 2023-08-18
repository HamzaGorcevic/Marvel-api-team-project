import style from "./home.module.css";
export default function HomePage() {
  return (
    <div className={style.imgContainer}>
      {/* <h1
        style={{ zIndex: "10", fontSize: "50px" }}
        className="font-weight-bold mt-5 ml-3 text-xl text-succes position-absolute"
      >
        <span className="text-warning">Welcome to </span>
        MARVEL UNIVERSE
      </h1> */}
      <div className={style.bgM} alt=""></div>
      <div className={style.imgEffects}></div>
    </div>
  );
}
