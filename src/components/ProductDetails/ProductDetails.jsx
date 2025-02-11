import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { Preloader } from "../Preloader/Preloader";
import VariantsOfColors from "./VariantsOfColors.jsx";
import { getSubcategoryDeal } from "../../utils/getSubcategoryDeal.jsx";
import { calculatePrice } from "../..//utils/calculatePrice.jsx";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id, subcategory } = useParams();
  const { data, loading, error } = useFetchData({ subcategory });
  const { addProduct } = useBasket();
  const product = data.find((item) => item.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(null);  

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
  const isDeal = getSubcategoryDeal(product.product_type);
  const { oldPrice, newPrice } = calculatePrice(product.price, isDeal);

  
  return (
    <div className="product-item">
      <div className="product-item__description">
      <h2 className="title-2">{product.name}</h2>
      <p className="product-item__category-name">{product.product_type}</p>
      <div className="product-item__rating">
          <div className="star-list">{renderStars(product.rating)}</div>
        </div>
      <div className="product-item__text text">{product.description}</div>
      </div>
      <div id="product-image" className="product-item__image">
        <img
          className="img"
          loading="lazy"
          src={product.api_featured_image}
          alt={product.name}
        />
      </div>
      <div className="product-item__buy">       
        <div className="product-item__price-wrap" data-id={product.id}>
        {isDeal ? (
        <p>
          <span className="price-old">{oldPrice}</span><span class="currency">{product.currency}</span>
          <span className="price-new">{newPrice}</span><span class="currency">{product.currency}</span>
        </p>
      ) : (
        <p><span className="price">{oldPrice}</span>
        <span class="currency">{product.currency}</span>
        </p>
      )}
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
