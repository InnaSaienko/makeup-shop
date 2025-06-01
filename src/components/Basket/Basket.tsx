import React from "react";
import BasketCard from "../../components/BasketCard/BasketCard";
import emptyBasket from "../../assets/images/empty-cart.svg";
import "./Basket.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectBasketItems} from "../../redux/selectors";
import {closeBasket} from "../../redux/basketSlice";



const Basket: React.FC<BasketProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const basketProducts = useSelector(selectBasketItems);

  if (!isOpen) {
    return null;
  }

  const isEmpty = basketProducts.length === 0;

  return (
    <>
    <div className="background-overlay" onClick={() => dispatch(closeBasket())}></div>
      <div className="basket">
        <div className="basket-header">
          Shopping Cart
          <span className="close" onClick={() => dispatch(closeBasket())}>
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
              basketProducts.map((product) => (
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
