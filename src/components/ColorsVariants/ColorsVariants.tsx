import React, {FC, JSX, useEffect, useState} from "react";
import "./ColorsVariants.scss"
import {Preloader} from "../Preloader/Preloader";


interface ProductColor {
    hex_value: string;
    colour_name?: string;
}

interface ColorsVariantsProps {
    product_colors?: ProductColor[];
    handleColorSelect: (color: ProductColor) => void;
}

const ColorsVariants: FC<ColorsVariantsProps> = ({product_colors = [], handleColorSelect}) : JSX.Element | null => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product_colors?.[0] || null);

    useEffect(() => {
        if (!selectedColor && product_colors?.length) {
            setSelectedColor(product_colors[0]);
            handleColorSelect(product_colors[0]);
        }
    }, [product_colors, handleColorSelect, selectedColor]);


    if (!selectedColor) {
        return <Preloader/>;
    }

    if (!product_colors || product_colors.length === 0) {
        return null;
    }
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="variants-container">
            <button
                className={`select-product-variant ${isDropdownOpen ? "open" : ""}`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                aria-label="Select product color"
            >
                <div className="variant">
                    <div className="variant-image" style={{backgroundColor: selectedColor?.hex_value}}></div>
                    {/* (?.) prevents errors*/}
                    <span>{selectedColor.colour_name}</span>
                </div>
                <div className="dropdown-icon"></div>

            </button>
            <div className={`variants-scrolling ${isDropdownOpen && ("open")}`}>
                {product_colors.map((color, index) => (
                    <div
                        key={index}
                        className="variant-option"
                        onClick={() => {
                            setSelectedColor(color);
                            handleColorSelect(color);
                            setIsDropdownOpen(false);
                        }}
                    >
                        <div className="variant-image" style={{backgroundColor: color.hex_value}}></div>
                        <span>{color.colour_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorsVariants;
