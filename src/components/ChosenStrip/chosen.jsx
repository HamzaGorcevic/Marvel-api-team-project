import { useParams } from "react-router-dom";

export default function Chosen() {
  const url = useParams();
  console.log(url, "should log params");
  return <div>HOME</div>;
}
