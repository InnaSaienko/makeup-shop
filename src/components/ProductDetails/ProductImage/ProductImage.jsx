import {useState} from "react";
import PopupWindow from "../PopupWindow/PopupWindow";
import "./ProductImage.scss"

const ProductImage = ({productImage}) => {
    const {name, image, product_type} = productImage;
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    return (
        <>
            <div id="product-image" className="product-item__image" onClick={() => setIsPopupOpen(true)}>
                <img
                    className="img"
                    loading="lazy"
                    src={image}
                    alt={name}
                />
            </div>
            {isPopupOpen && (<PopupWindow
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                name={name}
                subcategory={product_type}
                img={image}
            />)}

        </>
    )
}

export default ProductImage
