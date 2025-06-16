import React from "react";
import {Link} from "react-router-dom";
import { Preloader } from "../Preloader/Preloader";
import CustomArrow from "../CustomArrow/CustomArrow";
import Slider from "react-slick";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTopNext.scss";
import "../../assets/styles/slick-dots.scss"
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";

const SliderTopNext = () => {
  const { data, loading, error } = useFetchDataObjectPromise<Product[]>(PRODUCTS_QUERY_PATH);

  if (loading) { return <Preloader />; }
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Error: no product data</p>;

  const topNext = data.slice(5, Math.min(data.length, 21));

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
