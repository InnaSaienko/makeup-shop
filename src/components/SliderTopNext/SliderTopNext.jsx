import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { Preloader } from "../Preloader/Preloader";
import CustomArrow from "./CustomArrow.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTopNext.scss";

const SliderTopNext = () => {
  const { id, subcategory } = useParams();
  const { data, loading, error } = useFetchData({ subcategory });
  const navigate = useNavigate();
  const topNext = data.slice(5, 21);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
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

  if (loading) { return <Preloader />; };
  if (error) return <p>Error: {error}</p>;

  const handleClick = (product) => {
    navigate(`/product/${subcategory}/${product.id}`, { state: { product } });
  };

  return (
    <div className="carousel-top-next">
      <Slider {...settings}>
        {topNext.map((item) => (
          <div className="slide-item" key={item.id} onClick={() => handleClick(item)}>
            <div className="product-card">
              <div className="image">
                <img src={item.api_featured_image} alt={item.name} className="product-image" />
              </div>
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">${item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderTopNext;
