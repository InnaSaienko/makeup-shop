import React from "react";
import "./RenderStars.scss";

interface RatingProps {
    rating: number | null;
}


const RenderStars: React.FC<RatingProps> = ({rating} : RatingProps) => {
   const starRating = rating ?? 0;
    return (
        <div className="product-item__rating">
          <div className="star-list">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className={`star-list__item${index < starRating ? "" : "-gray"}`}>★</div>
            ))}
          </div>
        </div>
      );
}
export default RenderStars