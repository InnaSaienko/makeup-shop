import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSubcategoryDeal } from "../../utils/getSubcategoryDeal.jsx";
import "./ProductCard.scss";

function ProductCard(props) {  
  const {id, brand, rating, name, api_featured_image: image_link } = props;
  
  const { category, subcategory } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${category}/${subcategory}/${id}`, { state: { product: props } });
  };
  const isDeal = getSubcategoryDeal(subcategory);

  return (
    <li className="catalog-grid__cell card" id={id} onClick={() => handleClick()}>
      <div className="card__badge">
        {isDeal ? (<div className="card__label">DEAL</div>) : (<div className="card__label">HIT</div>)}
      </div>
      <div className="card-icons-wrapper">
        <div className="to-favorite">
        <div
          data-id={id}
          className="to-quick-buy"
          data-text-add="to__selected"
          data-text-remove="from__selected"
          data-is-favorite="0"
        ></div>
      </div>
      </div>
      
      <Link className="card__image">
        <img
          className="card__image__link"
          alt="image_product"
          src={image_link}
          loading="lazy"
        />
      </Link>
      <div className="card__content">
        <span className="card__title">
          {brand}
          <i className="material-icons right"></i>
        </span>
        <p className="card__description__rating">
          <span>{rating}</span>
          <span className="card__description">{name}</span>
        </p>
      </div>
    </li>
  );
}

export { ProductCard };
