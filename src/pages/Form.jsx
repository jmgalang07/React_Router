import { useState, useContext } from "react";
import { GiftContext } from "../context/GiftContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addGift } = useContext(GiftContext);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    addGift(name, description, navigate); 
    setName("");
    setDescription("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Agregar Regalo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del destinatario"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Descripción del regalo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
