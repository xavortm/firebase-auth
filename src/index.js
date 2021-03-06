import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Basic styling
import "normalize.css";
import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
