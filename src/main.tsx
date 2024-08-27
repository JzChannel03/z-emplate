import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ZemplateProvider from "@z-emplate/providers/principal/Zemplate.providers.tsx";
import { apiConfigList } from "./config/apiConfig.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ZemplateProvider apiConfigList={apiConfigList}>
      <App />
    </ZemplateProvider>
  </React.StrictMode>
);
