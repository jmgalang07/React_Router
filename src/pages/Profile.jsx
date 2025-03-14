import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user.name) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <p>Perfil de {user.name}</p>
      <p>Mensaje: {user.bio}</p>
      <button onClick={() => navigate("/")}>Volver a Inicio</button>
    </div>
  );
}

export default Profile;
