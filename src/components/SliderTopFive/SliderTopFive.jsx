import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData.js";
import { getCategoryName } from "../../utils/getCategoryName.jsx";
import { Preloader } from "../Preloader/Preloader";
import CustomArrow from "../CustomArrow/CustomArrow.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTopFive.scss";

const CarouselBanner = () => {
  const { data, loading, error } = useFetchData();
  const navigate = useNavigate();
  const topFive = data.slice(0, 5);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <CustomArrow direction="next" svg={true} />,
    prevArrow: <CustomArrow direction="prev" svg={true} />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (loading) return <Preloader />;
  if (error) return <p>Error: {error}</p>;

  const handleClick = (id, subcategory) => {
    const category = getCategoryName(subcategory);
    navigate(`/products/${category}/${subcategory}/${id}`);
  };

  return (
    <div className="carouselTopFive">
      <Slider {...settings}>
        {topFive.map((product, index) => {
         
          return (
            <div
              className="slide-item"
              key={product.id}
              onClick={() => handleClick(product.id, product.product_type)}
            >
                <div className="slide__content">
                  <div className={`slide__position-${index % 2 === 0 ? "left" : "right"}`}>
                    <div className="slide__label hit">
                      {product.brand ? product.brand.toUpperCase() : "COSMETICS"}
                    </div>
                    <h2 className="title-2">{product.name}</h2>
                    <button className="button">Buy Now</button>
                  </div>
                  <div className={`slide__position-${index % 2 === 0 ? "right" : "left"}`}>
                    <Link className="slide-link" to="#one!">
                      <img src={product.api_featured_image} alt="Product" className="slide-image" />
                    </Link>
                  </div>
                </div>
              </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselBanner;
