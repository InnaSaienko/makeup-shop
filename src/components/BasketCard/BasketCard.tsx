import React from "react";
import {useBasket} from "../../context/BasketContext/BasketContext";
import {Preloader} from "../Preloader/Preloader";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";

const BasketCard = ({id, selectedColor, product_type}: BasketItem) => {

    const {
        getUniqueProductQuantity,
        addProduct,
        decreaseQuantity,
        removeFromBasket,
    } = useBasket();

    const {data, loading, error} = useFetchDataObjectPromise<Product>(PRODUCTS_QUERY_PATH, {product_type});

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
                        onClick={() => {
                            decreaseQuantity(id, selectedColor);
                        }}
                    >
                        -
                    </div>
                    <input
                        key={selectedColor}
                        type="text"
                        name="count[]"
                        value={getUniqueProductQuantity(id, selectedColor)}
                        readOnly
                    />
                    <div
                        className="product__button-increase"
                        onClick={() => {
                            addProduct(id, selectedColor, product_type);
                        }}
                    >
                        +
                    </div>
                    <div className="product__price">Price</div>
                    <div
                        className="product__button-remove"
                        onClick={() => {
                            removeFromBasket(id, selectedColor);
                        }}
                    ></div>
                </div>
            </li>
        );
    } else {
        return <div>{error}</div>;
    }
}

export default BasketCard;
