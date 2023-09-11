import React from "react";
import ReactDom from "react-dom/client";
import App from "../src/components/App.jsx";

import { BrowserRouter } from "react-router-dom";
import "./sass/header.scss";
import "./sass/mainPart/main.scss";
import "./sass/mainPart/mainPartFirst.scss";
import "./sass/questionPart/questionHeader.scss";
import "./sass/questionPart/questionBlock.scss";
import "./sass/material/materialBlock.scss";
import "./sass/contact/ContactBlock.scss";
const rootEl = document.getElementById("root");
const rootInstance = ReactDom.createRoot(rootEl);

rootInstance.render(
  <BrowserRouter basename="/siteReact">
    <App />
  </BrowserRouter>
);
