import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; 
// The CSS files for ReportDisaster and DisasterList are imported within their components.
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
