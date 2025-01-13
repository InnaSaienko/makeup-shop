import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselBanner2.scss";

export default function CarouselBanner(props) {
  const { data = [] } = props;
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="carousel-banner2">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="slide-item" key={item.id} onClick={() => handleClick(item)}>
            <div className="product-card">
              <div className="image">
                <img src={item.image_link} alt={item.name} className="product-image" />
              </div>
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">${item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
