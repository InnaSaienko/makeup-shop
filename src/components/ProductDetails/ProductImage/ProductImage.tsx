import React from 'react';
import {useState} from "react";
import PopupWindow from "../PopupWindow/PopupWindow";
import "./ProductImage.scss"

interface ProductProps {
    productImage: Product;
}

const ProductImage: React.FC<ProductProps> = ({productImage}: ProductProps) => {
    const {name, api_featured_image} = productImage;
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    return (<>
            <div id="product-image" className="product-item__image" onClick={() => setIsPopupOpen(true)}>
                <img
                    className="img"
                    loading="lazy"
                    src={api_featured_image}
                    alt={name}
                />
            </div>
            {isPopupOpen && (<PopupWindow
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                productImage={productImage}
            />)}

        </>)
}

export default ProductImage
