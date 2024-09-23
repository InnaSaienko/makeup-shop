import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Basket.scss"

export function Basket({ basketItems, setBasketItem, isOpen, closeModal }) {
//  const [basket, setBasket] = useState([]);
//  setBasket([...basket, setBasketItem]);

  if (!isOpen) {
    return null; // don't open
  }
  const handleClose = (e) => {
    e.preventDefault();
    closeModal();
  };
  console.log("Item added to basket:", setBasketItem);
  return (
    <form className="basket-content">
      <span className="close" onClick={handleClose}>
        &times;
      </span>
      <h2>Basket</h2>
      <ul className="product-list">
        <li className="product-list__item">{basketItems.name}</li>
      </ul>
    </form>
  );

}
 