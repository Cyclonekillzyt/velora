import { createContext, useContext, useEffect, useState } from "react";
import products from "../data/data.js"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [checkoutStat, setCheckoutStat] = useState(false)
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");

    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isSameitem = (a, b) =>
    a._id === b._id && a.size === b.size && a.color === b.color;

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((el) => isSameitem(el, item));
      if (existingItem) {
        return prev.map((el) =>
          isSameitem(el, item) ? { ...el, quantity: el.quantity + item.quantity } : el,
        );
      } else {
        return [...prev, { ...item }];
      }
    });
  };

  const increaseQuantity = (item) => {
    setCart((prev) =>
      prev.map((el) =>
        isSameitem(el, item) ? { ...el, quantity: el.quantity + 1 } : el,
      ),
    );
  };

  const decreaseQuantity = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((el) => isSameitem(el, item));

      if (!existingItem) return prev;

      if (existingItem.quantity == 1)
        return prev.filter((el) => !isSameitem(el, item));

      return prev.map((el) =>
        isSameitem(el, item) ? { ...el, quantity: el.quantity - 1 } : el,
      );
    });
  };

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((el) => !isSameitem(el, item)));
  };

  const finalProduct = cart.map((el) => {
    const productData = products.find((item) => item._id === el._id);
    return {
      ...productData,
      size: el.size,
      color: el.color,
      quantity: el.quantity,
    };
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        finalProduct,
        checkoutStat,
        setCheckoutStat,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
