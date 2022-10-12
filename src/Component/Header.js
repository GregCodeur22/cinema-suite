import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Acceuil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coup-de-coeur"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              coup de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>React moovie</h1>
    </div>
  );
};

export default Header;
