import { useParams } from "react-router-dom";

export function Contacts() {
  const params = useParams();
  return <div>Contacts: {params?.id ? params.id : "No id"}</div>;
}
