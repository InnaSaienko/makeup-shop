import "./RenderStars.scss";

const RenderStars = (rating) => {
    if (rating === null) {
        rating = 0;
    }
    return (
        <div className="product-item__rating">
          <div className="star-list">
            {Array.from({ length: 5 }, (_, index) => (
              <div className={`star-list__item${index < rating ? "" : "-gray"}`}>★</div>
            ))}
          </div>
        </div>
      );
}
export default RenderStars