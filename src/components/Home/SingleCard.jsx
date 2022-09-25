export default function Card({ item, index }) {
  return (
    <div
      key={index}
      style={{ margin: 10, width: 400, height: 500, background: "red" }}
    >
      <h1>{item.name}</h1>
    </div>
  );
}
