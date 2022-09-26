import { useNavigate } from "react-router-dom";

export default function Card({ item, index }) {
  const navigate = useNavigate();
  return (
    <div
      key={index}
      className="card m-2 d-flex align-items-end"
      style={{
        width: " 17rem",
        background: "none",
        border: "none",
        boxShadow: "3px 3px 10px black",
      }}
    >
      <img
        onClick={() => {
          navigate(`/chose/${item.id}`);
        }}
        style={{ height: 300, boxShadow: "3px 3px 10px black" }}
        className="card-img-top"
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
      </div>
    </div>
  );
}
