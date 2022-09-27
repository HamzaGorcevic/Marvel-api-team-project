import { useLocation } from "react-router-dom";

export default function SingleSeriePage() {
  const location = useLocation();
  let item = location.state.items;
  console.log(item);
  return (
    <div
      className="container-fluid bg-dark d-flex flex-direction-column align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-around w-100 ">
        <div>
          <img
            className=""
            style={{ height: 400, width: 300 }}
            src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
            alt=""
          />
          <p style={{ color: "grey" }}>{item.modified?.slice(0, 10)}</p>
        </div>
        <div className="w-50 text-light" style={{ height: 400 }}>
          <h1 className="text-warning">
            {item.title ? item.title : item.name}
          </h1>
          <p>{item.description}</p>
          <div className="d-flex justify-content-between">
            {item.creators?.items.slice(0, 3).map((author) => {
              return (
                <div className="text-primary">
                  <h3>{author.name}</h3>
                  <p className="text-light">{author.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
