// @ts-nocheck
import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useBasket} from "../../context/BasketContext/BasketContext";
import {Preloader} from "../Preloader/Preloader";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImage from "./ProductImage/ProductImage";
import ColorsVariants from "../ColorsVariants/ColorsVariants";
import ProductPrice from "./ProductPrice/ProductPrice";
import {getSubcategoryDeal} from "../../utils/getSubcategoryDeal";
import "./ProductDetails.scss";
import "../Button/Button.scss";
import ProductTabs from "./ProductTabs/ProductTabs";
import Button from "../Button/Button.tsx";
import useFetchData from "../../hooks/useFetchData";
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";

const ProductDetails: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const {data: product, loading, error} = useFetchDataObjectPromise<Product>(`products/${id}.json`);
    const {addProduct} = useBasket();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    if (loading) {
        return <Preloader/>;
    }

    if (error) return <p>Error: {error}</p>;

    const handleColorSelect = (color: object) => {
        setSelectedColor(color);
    };

    const {deal, message} = getSubcategoryDeal(product.product_type);

    return (
        <>
            <div className="product-item">
                <ProductDescription isDeal={{deal, message}} productDetails={product}/>
                <ProductImage productImage={{
                    name: product.name,
                    api_featured_image: product.api_featured_image,
                    product_type: product.product_type
                }}/>
                <div className="product-item__buy">
                    <ProductPrice isDeal={{deal}}
                                  productPrice={{id: id, price: product.price, currency: product.currency}}/>
                    {product.product_colors && product.product_colors.length > 0 && (
                        <ColorsVariants product_colors={product.product_colors}
                                        handleColorSelect={handleColorSelect}/>
                    )}
                    <Button onClick={() => addProduct(product.id, selectedColor, product.product_type)}
                            context={"Buy"}/>
                </div>
            </div>
            <ProductTabs productDetails={product}/>
        </>
    );
}

export default ProductDetails;
