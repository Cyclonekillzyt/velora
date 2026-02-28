import { createContext, useContext, useState } from "react";
import products from "../data/data";


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState("");
  const [productColor, SetProductColor] = useState(0);
  const [orderSize, setOrderSize] = useState("");
  
  const productDetails = products.find((p) => p._id === currentProduct);


  return (
    <ProductsContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        productDetails,
        productColor,
        SetProductColor,
        orderSize,
        setOrderSize,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
