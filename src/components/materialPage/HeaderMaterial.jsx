import React from "react";

import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container-header">
      <Link to="/" className="container-header__link">
        Main pages
      </Link>
      <Link to="/question" className="container-header__link">
        Question pages
      </Link>
      <Link to="/contact" className="container-header__link">
        Contact pages
      </Link>
    </div>
  );
}
export default Header;
