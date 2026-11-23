import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { KitchenProvider } from "./context/KitchenContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <KitchenProvider>
        <App />
      </KitchenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
