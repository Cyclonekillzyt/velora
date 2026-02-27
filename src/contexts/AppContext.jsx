import { createContext, useContext, useEffect, useState } from "react";
import products from "../data/data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const filteredProducts =
    category === "all"
      ? products
      : category === "new"
        ? products.filter((p) => p.isNew)
        : products.filter((p) => p.category === category);

  return (
    <AppContext.Provider value={{ setCategory, filteredProducts, category }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
