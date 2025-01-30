import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { Preloader } from "../Preloader/Preloader"
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id, subcategory } = useParams();
  const { data, loading, error } = useFetchData({ subcategory });
  const { addProduct } = useBasket();
  const product = data.find((item) => item.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(null);
  //   product.product_colors.length > 0 ? product.product_colors[0] : null
  // );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  if (loading) { return <Preloader />; };
  if (error) return <p>Error: {error}</p>;

  const handleColorSelect = (color) => {
    setSelectedColor(color); 
    setIsDropdownOpen(false);
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

  const variantsOfColors =
    product.product_colors.length > 0 ? (
      <div className="select">
        <label
          className="select-product-variant"
          data-id={product.id}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="variant">
            <div
              className="variant-image"
              style={{
                backgroundColor: product.product_colors[0].hex_value ? product.product_colors[0].hex_value : "#ccc",
              }}
            ></div>
            <span>{product.product_colors[0].colour_name}</span>
          </div>
          <div className="dropdown-icon"></div>
        </label>

        {isDropdownOpen && (
          <div className="variants">
            {product.product_colors.map((color) => (
              <div key={color.hex_value} onClick={() => handleColorSelect(color)}>
                <div className="variant-image" style={{ backgroundColor: color.hex_value }}></div>
                <span>{color.colour_name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    ) : (
      <p>No colors available</p>
    );
    
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
        </div>
      </div>
      {variantsOfColors}
      <div className="product-item__button">
        <button className="button buy"
          onClick={() => addProduct(product.id, selectedColor?.hex_value || "", product.product_type)}
          disabled={!selectedColor}>Buy</button>
      </div>
    </div>
  );
}

export default ProductDetails;
