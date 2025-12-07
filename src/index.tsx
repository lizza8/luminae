import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingDesktop } from "./screens/LandingDesktop";
import { ProductDetail } from "./screens/ProductDetail";
import { ContactUs } from "./screens/ContactUs";
import { Checkout } from "./screens/Checkout";
import { WomenCategory } from "./screens/WomenCategory";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingDesktop />} />
        <Route path="/women" element={<WomenCategory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
