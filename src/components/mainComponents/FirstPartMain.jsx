import React from "react";
import StarPhoto from "../../../static/star.jpeg";
export default function firstPart() {
  return (
    <div className="main-container">
      <p className="main-container__text">
        this site is for preparing for the position of front end
      </p>
      <img src={StarPhoto} alt="star" className="main-container__star" />
    </div>
  );
}
