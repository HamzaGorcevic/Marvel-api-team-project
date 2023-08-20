import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        bottom: "0",
        background: "#fcfcfc59",
        zIndex: 8,
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
  );
}
