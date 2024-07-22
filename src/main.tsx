import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ZemplateProvider from "@z-emplate/providers/principal/Zemplate.providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ZemplateProvider>
    <App />
  </ZemplateProvider>
);
