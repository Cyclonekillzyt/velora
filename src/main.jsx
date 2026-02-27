import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./contexts/AppContext.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
