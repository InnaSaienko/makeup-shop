import React from "react";
import {Link} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { Preloader } from "../Preloader/Preloader";
import CustomArrow from "../CustomArrow/CustomArrow.jsx";
import Slider from "react-slick";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTopNext.scss";
import "../../assets/styles/slick-dots.scss"

const SliderTopNext = () => {
  const { data, loading, error } = useFetchData(PRODUCTS_QUERY_PATH);
  const topNext = data.length > 5 ? data.slice(5, Math.min(data.length, 21)) : data;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <CustomArrow direction="next" svg={true} />,
    prevArrow: <CustomArrow direction="prev" svg={true} />,
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

  if (loading) { return <Preloader />; }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="carouselTopNext">
      <Slider {...settings}>
        {topNext.map((product) => (
          <Link className="slide-item" key={product.id} to={`/products/${product.id}`}>
            <div className="product-card">
              <div className="image">
                <img src={product.api_featured_image} alt={product.name} className="product-image" />
              </div>
              <h3 className="title-2">{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderTopNext;
