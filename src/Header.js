import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li >
            <Link className="nav-item" to="/">
            Home
            </Link>
          </li>
          <li >
            <Link className="nav-item" to="/Cursos">
            Cursos
            </Link>
            </li>
          <li >
            <Link className="nav-item" to="/Eventos">
            Próximos eventos
            </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
