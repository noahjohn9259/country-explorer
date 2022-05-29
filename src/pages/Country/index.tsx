import { useParams } from "react-router-dom";

function Country() {
  let { id } = useParams();
  console.log(id);
  return <div>Country</div>;
}

export default Country;
