import React from "react";

const CustomArrow = ({ className, style, onClick, direction }) => {
    return (
      <div
        className={`${className} custom-${direction}-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };


  export default CustomArrow;