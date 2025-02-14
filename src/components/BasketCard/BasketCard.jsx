import React from "react";
import useFetchData from "../../hooks/useFetchData.js";
import { useBasket } from "../../context/BasketContext/BasketContext";
import { Preloader } from "../Preloader/Preloader";

function BasketCard(props) {
  const {id, selectedColor, product_type} = props;

  const {
    getUniqueProductQuantity,
    addProduct,
    decreaseQuantity,
    removeFromBasket,
  } = useBasket();

  const { data, loading, error } = useFetchData({ product_type });
  const foundProduct = data.find((product) => parseInt(product.id) === parseInt(id));
    
  if (loading) { return <Preloader />; };

  if (foundProduct) {
    const { name, category, api_featured_image } = foundProduct;
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
         <div className="product-list__name" style={{ color: selectedColor.hex_value }}>{name}</div>
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
    <div>
          {error}
        </div>
  }
}

export default BasketCard;
