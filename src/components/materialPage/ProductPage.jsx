import React from "react";
import Snikers from "../../../static/snikers.jpeg";
import ChocolateMilk from "../../../static/milk.jpeg";
export default function firstPart() {
  return (
    <div className="product-container">
      <p className="product-container__text-sniker">
        <img
          src={Snikers}
          alt="snikers"
          className="product-container__img-snikers"
        />
        Snickers is a chocolate bar consisting of nougat topped with caramel and
        peanuts, and all encased in milk chocolate.
      </p>
      <p className="product-container__text-Chocolate-milk">
        <img
          src={ChocolateMilk}
          alt="ChocolateMilk"
          className="product-container__img-ChocolateMilk"
        />
        Ingredients Partly skimmed milk, Sugar, Cocoa, Salt, Artificial flavour,
        Carrageenan, Allura red, Caramel, Vitamin A palmitate, Vitamin D3.
      </p>
    </div>
  );
}
