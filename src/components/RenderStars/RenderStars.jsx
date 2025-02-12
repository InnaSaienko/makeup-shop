import "./RenderStars.scss";

const RenderStars = (rating) => {
    if (rating === null) {
      rating = 0;
    }

    return Array.from({ length: 5 }, (_, index) => (
      <div
        className={`star-list__item${index < rating ? "" : "-gray"}`}
      >
        ★
      </div>
    ));
  };

  export default RenderStars