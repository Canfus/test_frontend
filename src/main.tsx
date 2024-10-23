import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RootProvider } from "@app/common";
import { App } from "@app/app";

import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </StrictMode>,
);
