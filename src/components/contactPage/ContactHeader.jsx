import React from "react";

import { Link } from "react-router-dom";
function ContactHeader() {
  return (
    <div className="container-header">
      <Link to="/" className="container-header__link">
        Main pages
      </Link>
      <Link to="/question" className="container-header__link">
        Question pages
      </Link>
      <Link to="/material" className="container-header__link">
        Material pages
      </Link>
      
    </div>
  );
}
export default ContactHeader;
