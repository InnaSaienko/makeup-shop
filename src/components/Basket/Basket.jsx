import React, { useState } from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
import "./Basket.scss";

function Basket({isOpen}) {
  const { closeBasket, basketItems } = useBasket();
  if (!isOpen) {
    return null;
  }

  return (
    <div className="basket-content">
        <span className="close" onClick={closeBasket}>
        &times;
      </span>
      <ul className="product-list">
        {basketItems.map((product, index) => (
          <li
            key={product.id}
            className="product-list__item"
            data-id={product.id}
          >Here is product: {index} {product.id}</li>
        ))}
      </ul>
    </div>
  );
}
export default Basket;
