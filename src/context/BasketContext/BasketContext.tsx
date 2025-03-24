// @ts-nocheck
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import Basket from "../../components/Basket/Basket";
import { useAuthorization } from "../../context/AuthorizationContext/AuthorizationContext";

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
}

type ChildrenNode = {
  children: React.ReactNode
};

export function BasketProvider({ children }: ChildrenNode) {
  const [basketProductsContext, setBasketProductsContext] = useState<BasketItem[]>([]);
  const { loggedUser } = useAuthorization();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);

  useEffect(() => {
    const storedBasket = localStorage.getItem(loggedUser);
    setBasketProductsContext(storedBasket ? JSON.parse(storedBasket) : []);
  }, [loggedUser]);

  useEffect(() => {   
      localStorage.setItem(loggedUser, JSON.stringify(basketProductsContext));    
  }, [basketProductsContext, loggedUser]);

  const addProduct = (id: string, selectedColor: string, product_type: string)=>  {
    setBasketProductsContext((prevBasket: BasketItem[]) =>  {
      const existingItem = prevBasket.find(
          (item) => item.id === id && item.selectedColor === selectedColor
      );
      let updatedBasket;
      if (existingItem) {
        updatedBasket = prevBasket.map(item =>
          (item.id === id && item.selectedColor === selectedColor)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedBasket = [...prevBasket, { id, selectedColor, product_type, quantity: 1 } as BasketItem];
      }

      localStorage.setItem(loggedUser, JSON.stringify(updatedBasket));
      return updatedBasket;
    });
}

  const decreaseQuantity = (id: string, selectedColor: string) => {
    setBasketProductsContext((prevBasket) => {
      return prevBasket
        .map(item =>
          item.id === id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    });
  }

  const removeFromBasket = (id: string, selectedColor: string) => {
    setBasketProductsContext((prevBasket) =>
      prevBasket.filter(item => !(item.id === id && item.selectedColor === selectedColor))
    );
  }

  const getUniqueProductQuantity = (id: string, selectedColor: string)=> {
    const product = basketProductsContext.find((item) => (item.id === id && item.selectedColor === selectedColor));
    return product ? product.quantity : 0;
  }

  const getProductQuantity = () => {
    if (basketProductsContext.length === 0) {
      return null;
    }

    return basketProductsContext.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
  }

  return (
    <BasketContext.Provider
      value={{
        basketProductsContext,
        setBasketProductsContext,
        addProduct,
        decreaseQuantity,
        removeFromBasket,
        getUniqueProductQuantity,
        getProductQuantity,
        openBasket,
        closeBasket,
      }}
    >
      {children}
      <Basket isOpen={isOpen} />
    </BasketContext.Provider>
  );
}
