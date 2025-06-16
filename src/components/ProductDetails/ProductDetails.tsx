import React, {FC, useState} from "react";
import {useParams} from "react-router-dom";
import {Preloader} from "../Preloader/Preloader";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImage from "./ProductImage/ProductImage";
import ColorsVariants from "../ColorsVariants/ColorsVariants";
import ProductPrice from "./ProductPrice/ProductPrice";
import {getSubcategoryDeal} from "../../utils/getSubcategoryDeal";
import "./ProductDetails.scss";
import "../Button/Button.scss";
import ProductTabs from "./ProductTabs/ProductTabs";
import Button from "../Button/Button";
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/basketSlice";

const ProductDetails: FC = () => {
    const {id} = useParams<{ id: string }>();
    const {data: product, loading, error} = useFetchDataObjectPromise<Product>(`products/${id}.json`);
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState<string | "">("");

    if (loading) {
        return <Preloader/>;
    }
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Error: no data</p>;

    const handleColorSelect = (color: ProductColor) => {
        setSelectedColor(color.hex_value);
    };

    const { deal = false, message = "" } = getSubcategoryDeal(product.product_type) ?? {};

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
                                  productPrice={{id: product.id, price: product.price, currency: product.currency}}/>
                    {product.product_colors && product.product_colors.length > 0 && (
                        <ColorsVariants product_colors={product.product_colors}
                                        handleColorSelect={handleColorSelect}/>
                    )}
                    <Button onClick={() => dispatch(addProduct({id: product.id, selectedColor, product_type: product.product_type}))}
                            context={"Buy"}/>
                </div>
            </div>
            <ProductTabs productDetails={product}/>
        </>
    );
}

export default ProductDetails;
