import React from "react";
import MaterialPage from "../components/materialPage/ProductPage.jsx";
import HeaderMaterial from "../components/materialPage/HeaderMaterial.jsx";
export default function Material() {
  return (
    <div className="Material-container">
      <HeaderMaterial />
      <MaterialPage />
    </div>
  );
}
