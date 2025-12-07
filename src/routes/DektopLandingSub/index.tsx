import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DektopLandingSub } from "./screens/DektopLandingSub";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DektopLandingSub />
  </StrictMode>,
);
