import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./style.css";

export default function Navigation() {
  return (
    <nav>
      Bem-vindo!
      <div className="nav-buttons">
        <Link className="btn-link" to="/">
          Home
        </Link>
        <Link className="btn-link" to="/projects">
          Projetos
        </Link>
        <Link className="btn-link" to="/contact">
          Contato
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
