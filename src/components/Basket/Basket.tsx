import React from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";
import BasketCard from "../../components/BasketCard/BasketCard";
import emptyBasket from "../../assets/images/empty-cart.svg";
import "./Basket.scss";

const Basket: React.FC<BasketProps> = ({ isOpen }) => {
  const { closeBasket, basketProductsContext } = useBasket();

  if (!isOpen) {
    return null;
  }

  const isEmpty = basketProductsContext.length === 0;

  return (
    <>
      <div className="background-overlay" onClick={closeBasket}></div>
      <div className="basket">
        <div className="basket-header">
          Shopping Cart
          <span className="close" onClick={closeBasket}>
            &times;
          </span>
        </div>
        <ul className="product-list">
        {isEmpty ? (
            <div className="empty-basket">
              <img src={emptyBasket} alt="Empty Basket" />
              <p>Your basket is empty</p>
            </div>
          ) : (
              basketProductsContext.map((product) => (
            <BasketCard
              key={`${product.id}}`}
              {...product}
            />
          ))
        )}
        </ul>
      </div>
    </>
  );
}

export default Basket;
