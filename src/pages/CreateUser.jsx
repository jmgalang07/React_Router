import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const { saveUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !bio.trim()) {
      setError("Algún campo está vacío");
    } else {
      saveUser(name, bio);
      navigate("/profile");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Mensaje</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <br />
        <button type="submit">Agregar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default CreateUser;
