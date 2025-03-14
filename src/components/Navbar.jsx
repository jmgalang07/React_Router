import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav style={{ backgroundColor: "#D81B60", padding: "10px", textAlign: "center" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Inicio</Link>
      <Link to="/list" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Lista de Destinatarios</Link>
      <Link to="/form" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Agregar Regalo</Link>
      {user.name ? (
        <>
          <Link to="/profile" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Perfil</Link>
          <Link to="/create-user" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Editar</Link>
        </>
      ) : (
        <Link to="/create-user" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Crear usuario</Link>
      )}
    </nav>
  );
}

export default Navbar;
