import React, { useState, useEffect } from "react";
import { useBasket } from "../../context/BasketContext/BasketContext";

function BasketCard(props) {
  const {
    id: id,
    selectedColor: selectedColor,
    product_type: product_type,
  } = props;

  const {
    getUniqueProductQuantity,
    addProduct,
    decreaseQuantity,
    removeFromBasket,
  } = useBasket();

  const [basketCardProduct, setBasketCardProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const foundProduct = data.find(
          (product) => product.id === parseInt(id)
        );
        if (foundProduct) {
          setBasketCardProduct(foundProduct);
        } else {
          setError(true);
        }
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(API_URL);
  }, [API_URL]);

  const { name, price, category, api_featured_image } = basketCardProduct;
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
          alt={category}
        />
      </div>
      <div className="product-list__name" style={{ color: selectedColor }}>{name}</div>
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
}

export default BasketCard;
