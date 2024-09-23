import { createContext, useContext } from "react";
import { useState } from "react";

const BasketContext = createContext({});

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);

  function getItemQuantity() {
    return basketItems.length;
  }

  return (
    <BasketContext.Provider
      value={{ getItemQuantity }}
    >
      {children}
    </BasketContext.Provider>
  );
}
