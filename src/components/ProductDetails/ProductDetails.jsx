import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { Preloader } from "../Preloader/Preloader";
import VariantsOfColors from "../VariantsColors/VariantsOfColors.jsx";
import RenderStars from "../RenderStars/RenderStars.jsx";
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

  const isDeal = getSubcategoryDeal(product.product_type);
  const { oldPrice, newPrice } = calculatePrice(product.price, isDeal);

  return (   
    <div className="product-item">
      <div className="product-item__description">
        {isDeal ? (<div className="card__label">DEAL</div>) : (<></>)}
        <h2 className="title-2">{product.name}</h2>
        <p className="product-item__category-name">{product.product_type}</p>
        <div className="product-item__rating">
          <div className="star-list" id={`${product.rating}`}><RenderStars rating={product.rating} /></div>
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
        {isDeal ? (
          <div className="product-item__price-wrap" data-id={product.id}>
            <span className="product-item__price_red">
              <div className="offers">
                <span className="price__item">{newPrice}</span>
                <span class="currency">{product.currency}</span>
              </div>
            </span>
            <span className="product-item__price_old">
              <div className="offers">
                <span className="price__item">{oldPrice}</span>
                <span class="currency">{product.currency}</span>
              </div>
            </span>
          </div>
        ) : (
          <div className="product-item__price-wrap" data-id={product.id}>
            <span className="product-item__price">
              <div className="offers"><span className="price__item">{oldPrice}</span>
                <span class="currency">{product.currency}</span>
              </div>
            </span>
          </div>
        )}
        {product.product_colors && product.product_colors.length > 0 ? (
          <VariantsOfColors product_colors={product.product_colors} handleColorSelect={handleColorSelect} id={product.id} />
        ) : ("")}
        <div className="product-item__button">
          <button className="button buy"
            onClick={() => addProduct(product.id, selectedColor, product.product_type)}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
