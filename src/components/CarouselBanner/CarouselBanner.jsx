import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselBanner.scss";

export default function CarouselBanner(props) {
  const { data = [] } = props;
  const navigate = useNavigate();
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <div
            className="slide-item"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <div className="slide__content">
              <div className="slide__left">
                <div className="slide__label hit">
                  {item.brand ? item.brand.toUpperCase() : "COSMETICS"}
                </div>
                <button className="button">Buy Now</button>
                <div className="slide__product-info">
                  <h2 className="title-2">{item.name}</h2>
                </div>
              </div>
              <div className="slide__right">
                <Link className="slide-link" to="#one!">
                  <img src={item.image_link} alt="Product image" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
