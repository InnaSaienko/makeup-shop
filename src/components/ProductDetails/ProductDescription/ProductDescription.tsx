import React from 'react';
import { Link } from "react-router-dom";
import RenderStars from '../RenderStars/RenderStars';
import "./ProductDescription.scss";
import {getCategoryName} from "../../../utils/getCategoryName";

interface DealProps {
    deal: boolean;
    message?: string;
}

interface ProductDescriptionProps {
    isDeal: DealProps;
    productDetails: Product;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ isDeal, productDetails} : ProductDescriptionProps) => {
    const { name, brand, rating, product_type } = productDetails;
    const category = getCategoryName(product_type);
    const { deal, message } = isDeal; // mauybe beter dispstching right in argument?
    return (
        <div className="product-item__description">
            {deal && (<div className="card_label">DEAL</div>)}
            <div className="label_brand">
                <Link className="brand" to={`/brand/${brand}`}><span>{brand}</span></Link>
                <Link className="brand-product__name" to={`/products/${category}/${product_type}`}> / <span>{product_type}</span></Link>
            </div>
            <p className="product-item__category-name">{name}</p>
            <RenderStars rating={rating} />
            {deal && (<div className="product-item__text text">{message}</div>)}
        </div>
    )
}

export default ProductDescription
