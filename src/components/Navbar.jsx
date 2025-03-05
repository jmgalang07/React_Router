import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#D81B60", padding: "10px", textAlign: "center" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Inicio</Link>
      <Link to="/list" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Lista de Destinatarios</Link>
      <Link to="/form" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Agregar Regalo</Link>
    </nav>
  );
}

export default Navbar;
