import React from "react";

import { Link } from "react-router-dom";
function HeaderQuestion() {
  return (
    <div className="container-header">
      <Link to="/" className="container-header__link">
        Main pages
      </Link>
      <Link to="/material" className="container-header__link">
        Material pages
      </Link>
      <Link to="/contact" className="container-header__link">
        Contact pages
      </Link>
    </div>
  );
}
export default HeaderQuestion;
