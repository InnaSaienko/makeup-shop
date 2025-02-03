import React, { useState } from "react";
import "./VariantsOfColors.scss"

const VariantsOfColors = ({ id, product_colors, handleColorSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        data-id={id}
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-label="Select product color"
      >
        <div className="variant">
          <div
            className="variant-image"
            style={{ backgroundColor: product_colors[0].hex_value || "#ccc" }}
          ></div>
          <span>{product_colors[0].colour_name}</span>
        </div>
        <div className="dropdown-icon"></div>
      </button>

      <div className={`variants ${isDropdownOpen ? "open" : ""}`}>
        {product_colors.map((color) => (
          <div
            key={color.hex_value}
            className="variant-option"
            onClick={() => {
              handleColorSelect(color);
              setIsDropdownOpen(false);
            }}
          >
            <div className="variant-image" style={{ backgroundColor: color.hex_value }}></div>
            <span>{color.colour_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantsOfColors;
