import {useState} from "react";
import PopupWindow from "../PopupWindow/PopupWindow";
import "./ProductImage.scss"
import {useParams} from "react-router-dom";

const ProductImage = ({productImage}) => {
    const {name, image} = productImage;
    const {subcategory } = useParams();
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    return (
        <>
            <div id="product-image" className="product-item__image" onClick={() => setIsPopupOpen(true)}>
                <img
                    className="img"
                    loading="lazy"
                    src={image}
                    alt={`Photo of ${name}`}
                />
            </div>
            {isPopupOpen && (<PopupWindow
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                name={name}
                subcategory={subcategory}
                img={image}
            />)}

        </>
    )
}

export default ProductImage
