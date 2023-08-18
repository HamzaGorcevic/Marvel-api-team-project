import { useNavigate } from "react-router-dom";

export default function ChosenSerie({ items }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/chose/${items.id}`, { state: items.resourceURI });
      }}
      className="ml-3"
      style={{
        height: 600,
        position: "relative",
        borderRadius: 20,
        width: "100%",
      }}
    >
      <img
        className=""
        style={{ position: "relative", height: "100%", borderRadius: 20 }}
        src={`${items.thumbnail?.path}.${items.thumbnail?.extension}`}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient(to right, #000000c7,#00000038,#00000027)",
          zIndex: 2,
          width: "100%",
          height: "100%",
          borderRadius: 20,
        }}
      ></div>
      <div
        className=" text-light"
        style={{ position: "absolute ", top: "60%", zIndex: 3, left: 20 }}
      >
        <h3>{items.title ? items.title : items.name}</h3>
      </div>
    </div>
  );
}
