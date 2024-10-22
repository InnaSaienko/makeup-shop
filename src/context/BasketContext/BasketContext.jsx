import { createContext, useContext } from "react";
import { useState } from "react";
import Basket from "../../components/Basket/Basket";

const BasketContext = createContext({});

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basketProductsContext, setBasketProductsContext] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openBasket = () => setIsOpen(true);
  const closeBasket = () => setIsOpen(false);

  // useEffect(() => {
  //   const storedItems = localStorage.getItem("basketItems");
  //   if (storedItems) {
  //     setBasketProductsContext(JSON.parse(storedItems));
  //   }
  // }, []);

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

  function getUniqueProductQuantity(id, selectedColor) {
    const product = basketProductsContext.find((item) => (item.id === id && item.selectedColor === selectedColor));
    return product ? product.quantity : 0;
  }

  function addProduct(id, selectedColor, product_type) {
    const item = basketProductsContext.find((item) => (item.id === id && item.selectedColor === selectedColor));

    if (item !== undefined) {
      const item = basketProductsContext.map((item) =>
        (item.id === id && item.selectedColor === selectedColor)
          ? { ...item, selectedColor: selectedColor, product_type: product_type, quantity: item.quantity + 1 }
          : item
      );
      return (
        setBasketProductsContext(item),
        localStorage.setItem("basketItems", JSON.stringify(basketProductsContext))
      );
    } else {
      return (
        setBasketProductsContext([...basketProductsContext, { id, selectedColor, product_type, quantity: 1 }]),
        localStorage.setItem("basketItems", JSON.stringify(basketProductsContext))
      );
    }
  }

  function decreaseQuantity(id, selectedColor) {
    const item = basketProductsContext.find(
      (item) => item.id === id && item.selectedColor === selectedColor && item.quantity >= 1
    );

    if (item !== undefined && item.quantity > 1) {
      const item = basketProductsContext.map((item) =>
        item.id === id && item.selectedColor === selectedColor && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return setBasketProductsContext(item);
    } else {
      return removeFromBasket(id, selectedColor);
    }
  }

  function removeFromBasket(id, selectedColor) {
    setBasketProductsContext((basketProductsContext) => {
      return basketProductsContext.filter((item) => !(item.id === id && item.selectedColor === selectedColor));
    });
  }

  return (
    <BasketContext.Provider
      value={{
        basketProductsContext,
        getProductQuantity,
        getUniqueProductQuantity,
        addProduct,
        decreaseQuantity,
        removeFromBasket,
        openBasket,
        closeBasket,
      }}
    >
      {children}
      <Basket isOpen={isOpen} />
    </BasketContext.Provider>
  );
}
