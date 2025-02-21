import { createContext, useContext, useState, useEffect } from "react";
import Basket from "../../components/Basket/Basket";
import { useAuthorization } from "../../context/AuthorizationContext/AuthorizationContext";

const BasketContext = createContext({});

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basketProductsContext, setBasketProductsContext] = useState([]);
  const { loggedUser } = useAuthorization();
  const [isOpen, setIsOpen] = useState(false);

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);

  useEffect(() => {
    const prevUser = localStorage.getItem(loggedUser) ;
    console.log("prevUser in localStore: " , prevUser);

    const storedBasket = localStorage.getItem(loggedUser);
    setBasketProductsContext(storedBasket ? JSON.parse(storedBasket) : []);
  }, [loggedUser]);
  

  useEffect(() => {   
      localStorage.setItem(loggedUser, JSON.stringify(basketProductsContext));    
  }, [basketProductsContext, loggedUser]);



  function addProduct(id, selectedColor, product_type) {
    setBasketProductsContext((prevBasket) => {
      const existingItem = prevBasket.find(item => item.id === id && item.selectedColor === selectedColor);

      let updatedBasket;
      if (existingItem) {
        updatedBasket = prevBasket.map(item =>
          (item.id === id && item.selectedColor === selectedColor)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedBasket = [...prevBasket, { id, selectedColor, product_type, quantity: 1 }];
      }

      localStorage.setItem(loggedUser, JSON.stringify(updatedBasket));
      return updatedBasket;
    });
}


  function decreaseQuantity(id, selectedColor) {
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

  function removeFromBasket(id, selectedColor) {
    setBasketProductsContext((prevBasket) =>
      prevBasket.filter(item => !(item.id === id && item.selectedColor === selectedColor))
    );
  }
  function getUniqueProductQuantity(id, selectedColor) {
    const product = basketProductsContext.find((item) => (item.id === id && item.selectedColor === selectedColor));
    return product ? product.quantity : 0;
  }

  function getProductQuantity() {
    if (basketProductsContext.length === 0) {
      return null;
    }

    const quantity = basketProductsContext.reduce(
      (quantity, item) => item.quantity + quantity,
      0
    );
    return quantity;
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
