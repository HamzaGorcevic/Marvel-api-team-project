import style from "./home.module.css";
export default function HomePage() {
  return (
    <div className={style.imgContainer}>
      <h1 className={style.title}>
        Welcome <span className={style.marvel}>MARVEL</span> fans
      </h1>
      <img
        style={{ width: "100%", height: "100%", position: "absolute" }}
        src="https://wallpapers.com/images/featured/marvel-villains-2urfmojso6xgszad.jpg"
        alt=""
      />
      <div className={style.imgEffects}></div>
    </div>
  );
}
