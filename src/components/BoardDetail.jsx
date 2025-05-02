import { useParams } from "react-router-dom";

export default function BoardDetail(props) {
  const { id } = useParams();
  return <div>BoardDetail {id}</div>;
}
