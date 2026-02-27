import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import ProductsDetails from "./pages/ProductsDetails";

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
        <Route path="/products" element={<ProductsGrid/>}/>
        <Route path="/product/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;
