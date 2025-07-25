import React, {FC, JSX} from "react";
import {Link, useParams} from "react-router-dom";
import {getSubcategoryDeal} from "../../utils/getSubcategoryDeal";
import "./ProductCard.scss";

const ProductCard : FC<Product> = (props ) : JSX.Element => {
    const {id, brand, rating, name, api_featured_image: image_link} = props;

    const {subcategory = ""} = useParams();

    const isDealData = getSubcategoryDeal(subcategory);
    const isDeal = isDealData?.deal ?? false;

    return (
        <Link className="catalog-grid__cell card" id={id} to={`/products/${id}`}>
            <div className="card__badge">
                {isDeal ? (<div className="card_label">DEAL</div>) : (<div className="card_label">HIT</div>)}
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

            <div className="card__image">
                <img
                    className="card__image__link"
                    alt="image_product"
                    src={image_link}
                    loading="lazy"
                />
            </div>
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
        </Link>
    );
}

export {ProductCard};
