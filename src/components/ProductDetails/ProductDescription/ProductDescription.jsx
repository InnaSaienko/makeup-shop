import React from 'react';
import { useParams } from "react-router-dom";
import RenderStars from '../RenderStars/RenderStars';
import "./ProductDescription.scss"
import { Link } from 'react-router-dom';

const ProductDescription = ({ isDeal, productDetails }) => {
    const { category, subcategory } = useParams();
    const { name, brand, rating } = productDetails.product;
    const { deal, message } = isDeal;
    return (
        <div className="product-item__description">
            {deal && (<div className="card__label">DEAL</div>)}
            <div className="label_brand">
                <Link className="brand" to={`/products/${brand}`}>   <span>{brand}</span> </Link>
                <Link className="brand-product__name" to={`/products/${category}/${subcategory}`}> / <span>{subcategory}</span></Link>
            </div>
            <p className="product-item__category-name">{name}</p>
            <RenderStars rating={rating} />
            {deal && (<div className="product-item__text text">{message}</div>)}
        </div>
    )
}

export default ProductDescription
