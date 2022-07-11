import { createContext, useState } from "react";

export const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === exist.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === exist.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <ShoppingContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
