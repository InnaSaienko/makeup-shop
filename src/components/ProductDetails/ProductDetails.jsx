import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import {useBasket} from "../../context/BasketContext/BasketContext";
import {Preloader} from "../Preloader/Preloader";
import ProductDescription from "./ProductDescription/ProductDescription.jsx";
import ProductImage from "./ProductImage/ProductImage.jsx";
import VariantsOfColors from "../VariantsColors/VariantsOfColors.jsx";
import ProductPrice from "./ProductPrice/ProductPrice.jsx";
import {getSubcategoryDeal} from "../../utils/getSubcategoryDeal.jsx";
import "./ProductDetails.scss";
import ProductTabs from "./ProductTabs/ProductTabs";

const ProductDetails = () => {
    const {id, subcategory} = useParams();
    const {data, loading, error} = useFetchData({product_type: subcategory});
    const {addProduct} = useBasket();
    const product = data.find((item) => item.id === Number(id));
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        if (!loading && product?.product_colors?.length) {
            setSelectedColor(product.product_colors[0]);
        }
    }, [loading, product]);

    if (loading) {
        return <Preloader/>;
    }

    if (error) return <p>Error: {error}</p>;

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const {deal, message} = getSubcategoryDeal(product.product_type);
    console.log("image: ", product.api_featured_image);

    return (
        <>
            <div className="product-item">
                <ProductDescription isDeal={{deal, message}} productDetails={product}/>
                <ProductImage productImage={{name: product.name, image: product.api_featured_image}}/>
                <div className="product-item__buy">
                    <ProductPrice isDeal={{deal}}
                                  productPrice={{id: id, price: product.price, currency: product.currency}}/>
                    {product.product_colors && product.product_colors.length > 0 && (
                        <VariantsOfColors product_colors={product.product_colors} handleColorSelect={handleColorSelect}
                                          id={product.id}/>
                    )}
                    <div className="product-item__button">
                        <button className="button buy"
                                onClick={() => addProduct(product.id, selectedColor, product.product_type)}>Buy
                        </button>
                    </div>
                </div>
            </div>
            <ProductTabs productDetails={product}/>
        </>
    );
}

export default ProductDetails;
