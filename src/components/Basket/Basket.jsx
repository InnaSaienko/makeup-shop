import React from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { unFormatId } from "../../utilities/unFormatId";
import "./Basket.scss";

function Basket({ isOpen }) {
  const {
    closeBasket,
    basketItems,
    getUniqueProductQuantity,
    addItem,
    decreaseQuantity,
    removeFromBasket,
  } = useBasket();
  if (!isOpen) {
    return null;
  }

  return (
    <div className="basket">
      <div className="basket-header">
        Shopping Cart
        <span className="close" onClick={closeBasket}>
          &times;
        </span>
      </div>

      <ul className="product-list">
        {basketItems.map((product, index) => (
          <li
            key={product.id}
            className="product-list__item"
            data-id={product.id}
          >
            <div id={product.id} className="product-list__image">
              <img
                className="img"
                loading="lazy"
                src={product.id}
                alt={product.name}
              />
            </div>
            {product.id}
            <div className="product-list__count">
              <div
                className="product__button-decrease"
                onClick={() => {
                  decreaseQuantity(product.id);
                }}
              >
                -
              </div>
              <input
                key={index}
                type="text"
                name="count[]"
                value={getUniqueProductQuantity(product.id)}
                readOnly
              />
              <div
                className="product__button-increase"
                onClick={() => {
                  addItem(product.id);
                }}
              >
                +
              </div>
              <div className="product__price">Price</div>
              <div
                className="product__button-remove"
                onClick={() => {
                  removeFromBasket(product.id);
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Basket;
