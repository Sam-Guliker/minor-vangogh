import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header>
      {props.children}
      <h1>Persoonlijke tour</h1>
      <Link className="header-link right" to="/selection">
        Selection
      </Link>
    </header>
  );
};

export default Header;
