import React, {JSX} from 'react';
import "./HeaderTop.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectIsBasketOpen, selectTotalQuantity} from "../../redux/selectors";
import {openBasket} from "../../redux/basketSlice";
import Basket from "../../components/Basket/Basket";

const BasketBox = (): JSX.Element => {
    const dispatch = useDispatch();
    const productQuantity = useSelector(selectTotalQuantity);
    const isBasketOpen = useSelector(selectIsBasketOpen);

    const handleClick = () => {
        dispatch(openBasket());
    };

    return (
        <>
            <div className="basket-box">
                <button className={`basket-widget ${productQuantity === null ? "empty" : ""}`} onClick={handleClick}>
                    <span className={`header-counter${productQuantity === null ? "hidden" : ""}`}>{productQuantity}</span>
                </button>
            </div>
            {isBasketOpen && <Basket/>}
        </>
    );
};

export default BasketBox;