import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Card({ item, index }) {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className="card m-2 d-flex align-items-end singleCard"
      style={{
        width: " 17rem",
        background: "none",
        border: "none",
        boxShadow: "3px 3px 10px black",
      }}
    >
      <img
        onClick={() => {
          navigate(`/chose/${item.id}`, { state: item.resourceURI });
        }}
        style={{ height: 300, boxShadow: "3px 3px 10px black" }}
        className="card-img-top"
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        alt=""
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ color: "yellow", fontWeight: "bold" }}
        >
          {item.name
            ? item.name?.slice(0, 15)
            : item.title?.slice(0, 15)
            ? item.title
            : item.fullName?.slice(0, 15)}
        </h5>
        <h6
          className="card-title"
          style={{ position: "absolute", bottom: 0, left: 2, color: "white" }}
        >
          {item.modified
            ?.slice(0, 10)
            ?.replace(/-/g, "/")
            ?.replace(/\/0001/, "1982")}
        </h6>
      </div>
    </div>
  );
}
