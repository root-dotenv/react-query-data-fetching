import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainQueryProvider from "./providers/Query-Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* - - - Ile Main Provider Component Inawrap/Serve Application nzima hapa */}
    <MainQueryProvider>
      <App />
    </MainQueryProvider>
  </React.StrictMode>
);
