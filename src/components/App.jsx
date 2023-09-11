import React from "react";
import MainPage from "../pages/Main.jsx";
import QuestionPage from "../pages/Question.jsx";
import MaterialPage from "../pages/Material.jsx";
import ContactPage from "../pages/Contact.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/material" element={<MaterialPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
export default App;
