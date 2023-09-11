import React from "react";
import Header from "../components/Header.jsx";
import FirstPartPages from "../components/mainComponents/FirstPartMain.jsx";

export default function MainPage() {
  return (
    <div className="MainPage-container">
      <Header />
      <FirstPartPages />
    </div>
  );
}
