import React, {FC, JSX} from "react";
import "./CustomArrow.scss";
import "../../assets/styles/_variables.scss";

const CustomArrow : FC<CustomArrowProps> = ({ className, style, onClick, direction, svg}) : JSX.Element => {
  return (
    <div
      className={`${className} custom-${direction}-arrow`}
      style={{ ...style, display: "block", cursor: "pointer" }}
      onClick={onClick}
    >
      {svg && (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="$color-main"
            d="M19.643 16L9.286 26.336a.973.973 0 0 0 0 1.379c.381.38 1 .38 1.38 0l11.048-11.026a.973.973 0 0 0 0-1.378L10.667 4.285a.978.978 0 0 0-1.381 0 .973.973 0 0 0 0 1.379L19.643 16z"
          />
        </svg>
      )}
    </div>
  );
};

export default CustomArrow;
