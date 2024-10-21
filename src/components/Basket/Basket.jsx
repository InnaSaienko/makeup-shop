import React from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
import BasketCard from "../../components/BasketCard/BasketCard"
import { Preloader } from "../Preloader/Preloader";
import "./Basket.scss";

function Basket({ isOpen }) {
  const {
    closeBasket,
    basketProductsContext
  } = useBasket();
 
  if (!isOpen) {
    return null;
  }

  // const productsByType = basketProductsContext.reduce((acc, item) => {
  //      const { product_type } = item;
  
  //      if (!acc[product_type]) {
  //        acc[product_type] = [];
  //      }
  //      acc[product_type].push(item);
  //      return acc;
  // }, {});

  return (
    <div className="basket">
      <div className="basket-header">
        Shopping Cart
        <span className="close" onClick={closeBasket}>
          &times;
        </span>
      </div>
      <ul className="product-list">        
        {basketProductsContext.map((product) => <BasketCard key={`${product.id}_${product.selectedColor ? product.selectedColor : 'default'}`} 
    {...product}  />)}        
      </ul>
    </div>
  );
}
export default Basket;
