import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { Preloader } from "../Preloader/Preloader";
import VariantsOfColors from "./VariantsOfColors.jsx";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id, subcategory } = useParams();
  const { data, loading, error } = useFetchData({ subcategory });
  const { addProduct } = useBasket();
  const product = data.find((item) => item.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(null);
  const params = useParams();
  console.log("Params received:", params);

  if (loading) { return <Preloader />; };
  if (error) return <p>Error: {error}</p>;

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const renderStars = (rating) => {
    if (rating === null) {
      return Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className={`star-list__item ${index < rating ? "" : "no-rating"}`}
        >
          ★
        </div>
      ));
    }

    return Array.from({ length: 5 }, (_, index) => (
      <div
        // key={index}
        className={`star-list__item ${index < rating ? "" : "no-rating"}`}
      >
        ★
      </div>
    ));
  };
  return (
    <div className="product-item">
      <div id="product-image" className="product-item__image">
        <img
          className="img"
          loading="lazy"
          src={product.api_featured_image}
          alt={product.name}
        />
      </div>

      <div className="product-item__info">
        <h2 className="title-2">{product.name}</h2>
        <p>{product.product_type}</p>
        <div className="product-item__rating">
          <div className="star-list">{renderStars(product.rating)}</div>
        </div>
        <div className="product-item__buy" data-id={product.id}>
          {product.price} {product.currency}
          {product.product_colors && product.product_colors.length > 0 && (
            <VariantsOfColors product_colors={product.product_colors} handleColorSelect={handleColorSelect} id={product.id} />
          )}
          <div className="product-item__button">
            <button className="button buy"
              onClick={() => addProduct(product.id, selectedColor?.hex_value || "", product.product_type)}
              disabled={!selectedColor}>Buy</button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ProductDetails;
