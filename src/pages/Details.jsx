import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GiftContext } from "../context/GiftContext";

function Details() {
  const { id } = useParams();
  const { gifts } = useContext(GiftContext);
  const navigate = useNavigate();

  const gift = gifts.find((g) => g.id.toString() === id);

  if (!gift) {
    return <p style={{ textAlign: "center" }}>Regalo no encontrado.</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Detalles del Regalo</h2>
      <p><strong>Para:</strong> {gift.name}</p>
      <p><strong>Descripción:</strong> {gift.description}</p>
      <button onClick={() => navigate("/list")}>Back</button>
    </div>
  );
}

export default Details;
