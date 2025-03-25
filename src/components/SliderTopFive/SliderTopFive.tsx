import {Link} from "react-router-dom";
import Slider from "react-slick";
import {Preloader} from "../Preloader/Preloader";
import CustomArrow from "../CustomArrow/CustomArrow";
import Button from "../Button/Button";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderTopFive.scss";
import "../../assets/styles/slick-dots.scss";
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";

const CarouselBanner = () => {
    const {data, loading, error} = useFetchDataObjectPromise<Product[]>(PRODUCTS_QUERY_PATH);

    if (loading) return <Preloader/>;
    if (error) return <p>Error: {error}</p>;

    // @ts-ignore
    const topFive = data.slice(0, 5);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: <CustomArrow direction="next" svg={true}/>,
        prevArrow: <CustomArrow direction="prev" svg={true}/>,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carouselTopFive">
            <Slider {...settings}>
                {topFive.map((product, index) => (
                    <Link className="slide-item" key={product.id} to={`/products/${product.id}`}>
                        <div className={`product-card ${index % 2 === 0 ? "reverse" : ""}`}>
                            <div className="slide__position-left">
                                <div className="slide__label hit">
                                    {product.brand ? product.brand.toUpperCase() : "COSMETICS"}
                                </div>
                                <h2 className="title-2">{product.name}</h2>
                                <Button context={"Details"} onClick={() => {}}></Button>
                            </div>
                            <div className="slide__position-right">
                                <img src={product.api_featured_image} alt="Product" className="slide-image"/>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </Slider>
        </div>
    );
};

export default CarouselBanner;
