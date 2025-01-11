import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useBasket } from "../../context/BasketContext/BasketContext";
import "./ProductDetails.scss";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;
  const [selectedColor, setSelectedColor] = useState(product.product_colors[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { addProduct } = useBasket();
 
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsDropdownOpen(false); // Close dropdown after selecting a color
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
        key={index}
        className={`star-list__item ${index < rating ? "" : "no-rating"}`}
      >
        ★
      </div>
    ));
  };

  const variant = (color, idOfProduct) => (
    <div className="variant" data-id={idOfProduct} onClick={() => handleColorSelect(color)}>
      <div
        className="variant-image"
        style={{ backgroundColor: color.hex_value }}
      ></div>
      <span>{color.colour_name}</span>
    </div>
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
      <div className="select">
        <label
          className="select-product-variant" data-id={product.id}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
        >
          {variant(selectedColor, product.id)}
          <div className="dropdown-icon"></div>
        </label>

        {isDropdownOpen && (
          <div className="variants">
            {product.product_colors.map((color, index) => (
              <div key={index}>{variant(color)}</div>
            ))}
          </div>
        )}
      </div>
      <div className="product-item__button">
        <button className="button buy"
        onClick={() => addProduct(product.id, selectedColor.hex_value, product.product_type)}>Buy</button>
      </div>
    </div>
  );
}

export default ProductDetails;
