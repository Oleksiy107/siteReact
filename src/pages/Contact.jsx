import React from "react";
import ContactHeaderPage from "../components/contactPage/ContactHeader.jsx";
import ContactBlock from "../components/contactPage/ContactBlock.jsx";
export default function Contact() {
  return (
    <div className="Contact-container">
      <ContactHeaderPage />
      <ContactBlock />
    </div>
  );
}
