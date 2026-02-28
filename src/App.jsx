import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductsGrid />
            </>
          }
        />
        <Route path="/products" element={<ProductsGrid />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
