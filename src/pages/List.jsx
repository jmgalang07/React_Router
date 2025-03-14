import { useContext } from "react";
import { GiftContext } from "../context/GiftContext";
import { Link } from "react-router-dom";

function List() {
  const { gifts, removeGift } = useContext(GiftContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Lista de Destinatarios</h2>
      {gifts.length === 0 ? (
        <p>No hay regalos pendientes.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {gifts.map((gift) => (
            <li key={gift.id} style={{ marginBottom: "10px" }}>
              <Link
                to={`/details/${gift.id}`}
                style={{ textDecoration: "none", color: "#D81B60" }}
              >
                {gift.name} - {gift.description}
              </Link>
              <button
                onClick={() => removeGift(gift.id)}
                style={{ marginLeft: "10px" }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
