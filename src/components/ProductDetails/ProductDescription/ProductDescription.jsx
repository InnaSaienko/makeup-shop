import React from 'react';
import RenderStars from '../RenderStars/RenderStars';
import "./ProductDescription.scss"

const ProductDescription = ({ isDeal, productDescription }) => {
    const { name, brand, product_type, description, rating } = productDescription;
    const { deal, message } = isDeal;
    return (
        <div className="product-item__description">
            {deal ? (<div className="card__label">DEAL</div>) : (<></>)}
            <h2 className="title-2">{name}</h2>
            <p className="product-item__category-name">{product_type}</p>
            <RenderStars rating={rating} />
            <div className="product-item__text text">{message}</div>            
        </div>
    )
}

export default ProductDescription
