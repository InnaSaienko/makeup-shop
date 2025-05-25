import React from 'react';
import { useBasket } from "../../context/BasketContext/BasketContext";
import "./HeaderTop.scss";

const BasketBox : JSX.Element = () => {
    const { openBasket, getProductQuantity } = useBasket();
    return (
        <div className="basket-box">
            <button className={`basket-widget ${getProductQuantity() === null ? "empty" : ""}`} onClick={openBasket}>
                <span className={`header-counter${getProductQuantity() === null ? "hidden" : ""}`}>{getProductQuantity()}</span>
            </button>
        </div>
    );
};

export default BasketBox;