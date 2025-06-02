import React, {FC, JSX} from "react";
import {Preloader} from "../Preloader/Preloader";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";
import {useDispatch, useSelector} from "react-redux";
import {selectProductQuantity} from "../../redux/selectors";
import {addProduct, decreaseQuantity, removeFromBasket} from "../../redux/basketSlice";

const BasketCard : FC<BasketItem> = ({id, selectedColor, product_type} ) : JSX.Element => {
    const dispatch = useDispatch();
    const {data, loading, error} = useFetchDataObjectPromise<Product>(PRODUCTS_QUERY_PATH, {product_type});
    const quantity = useSelector(selectProductQuantity(id, selectedColor));

    if (loading) {return <Preloader/>;}
    if (error) return <p>Error: {error}</p>;

    // @ts-ignore
    const foundProduct = data.find((product) => parseInt(product.id) === parseInt(id));

    if (foundProduct) {
        const {name, category, api_featured_image} = foundProduct;
        return (
            <li key={selectedColor} className="product-list__item" data-id={id}>
                <div
                    id={id}
                    className="product-list__image"
                >
                    <img
                        className="img"
                        loading="lazy"
                        src={api_featured_image}
                        alt={category ?? ""} //logical nullish assignment null => ""
                    />
                </div>
                <div className="product-list__name" style={{color: selectedColor}}>{name}</div>
                <div className="product-list__count">
                    <div
                        className="product__button-decrease"
                        onClick={() => {dispatch(decreaseQuantity({id, selectedColor}))
                        }}
                    >
                        -
                    </div>
                    <input
                        key={selectedColor}
                        type="text"
                        name="count[]"
                        value={quantity}
                        readOnly
                    />
                    <div
                        className="product__button-increase"
                        onClick={() => dispatch(addProduct({id, selectedColor, product_type}))}
                    >
                        +
                    </div>
                    <div className="product__price">Price</div>
                    <div
                        className="product__button-remove"
                        onClick={() => dispatch(removeFromBasket({id, selectedColor}))}
                    ></div>
                </div>
            </li>
        );
    } else {
        return <div>{error}</div>;
    }
}

export default BasketCard;
