import React, {FC, JSX} from 'react';
import {useState} from "react";
import PopupWindow from "../PopupWindow/PopupWindow";
import "./ProductImage.scss"

interface ProductProps {
    productImage: Pick<Product, "name" | "api_featured_image" | "product_type">;
}

const ProductImage: FC<ProductProps> = ({productImage}): JSX.Element => {
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
