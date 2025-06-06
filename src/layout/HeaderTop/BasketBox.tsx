import React, {JSX} from 'react';
import "./HeaderTop.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectTotalQuantity} from "../../redux/selectors";
import {openBasket} from "../../redux/basketSlice";

const BasketBox  = (): JSX.Element => {
    const dispatch = useDispatch();
    const productQuantity = useSelector(selectTotalQuantity);

    return (
        <div className="basket-box">
            <button className={`basket-widget ${productQuantity === null ? "empty" : ""}`} onClick={() => dispatch(openBasket())}>
                <span className={`header-counter${productQuantity === null ? "hidden" : ""}`}>{productQuantity}</span>
            </button>
        </div>
    );
};

export default BasketBox;