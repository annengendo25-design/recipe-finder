import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { KitchenProvider } from "./context/KitchenContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <KitchenProvider>
        <App />
      </KitchenProvider>
    </HashRouter>
  </React.StrictMode>
);
