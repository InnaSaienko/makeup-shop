import React, {FC, JSX} from 'react';
import {useState} from "react";
import "./PopupWindow.scss";

interface ProductImageProps {
    onClose: (isOpen: boolean) => void;
    productImage: Pick<Product, "name" | "api_featured_image" | "product_type">;
    isOpen: boolean;
}

const PopupWindow: FC<ProductImageProps> = ({onClose, productImage}) : JSX.Element => {
    const {name, api_featured_image, product_type} = productImage;
    const [mousePos, setMousePos] = useState({x: 50, y: 50});

    const handleClose = () => {
        onClose(true);
        setTimeout(onClose, 500); // Matches animation duration
    };
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();// Get the position and size of the popup-image relative to the viewport
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePos({x, y});
    };

    return (
        <div className="background-overlay" onClick={handleClose}>
            <div className="popup-window active">
                <div className="popup-close" onClick={handleClose}></div>
                <div className="popup-content">
                    <span className="product-item__name title-2">{name}</span>
                    <span className="product-item__subcategory">{product_type}</span>
                    <div className="popup-image"
                         onMouseMove={handleMouseMove}
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}>
                        <img src={api_featured_image} alt={name}
                             style={{
                                 transform: isHovered
                                     ? `translate(-${mousePos.x / 10}%, -${mousePos.y / 10}%) scale(1.5)`
                                     : "none",
                                 transition: "transform 0.2s ease-out"
                             }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupWindow;