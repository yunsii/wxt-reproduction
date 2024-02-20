import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { I18nContextProvider } from "@/contexts/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nContextProvider>
      <App />
    </I18nContextProvider>
  </React.StrictMode>
);
