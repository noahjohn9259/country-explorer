import { useParams } from "react-router-dom";

function Country() {
  let { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
}

export default Country;
