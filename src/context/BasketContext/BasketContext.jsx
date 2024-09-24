import { createContext, useContext } from "react";
import { useState } from "react";
import Basket from "../../components/Basket/Basket";

const BasketContext = createContext({});

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false)

  function getItemQuantity() {
    if(basketItems.length === 0) {
      return null;
    }
    const quantity = basketItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0);
    return quantity;
  }

  function addItem(id) {
    const item = basketItems.find((item) => item.id === id);

    if (item !== undefined) {
      const item = basketItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return setBasketItems(item);
    } else {
      return setBasketItems([...basketItems, { id, quantity: 1 }]);
    }
  }

  return (
    <BasketContext.Provider value={{ basketItems, getItemQuantity, addItem, openBasket,
      closeBasket, }}>
      {children}
      <Basket isOpen={isOpen} />
    </BasketContext.Provider>
  );
}
