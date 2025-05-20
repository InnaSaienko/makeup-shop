import React from "react";
import {useParams} from "react-router-dom";
import {ProductCard} from "../ProductCard/ProductCard";
import {Preloader} from "../Preloader/Preloader";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import "./ProductsList.scss";
import useFetchDataObjectPromise from "../../hooks/useFetchDataObjectPromise";

interface ProductParams extends Record<string, string | undefined> {
    category?: string;
    subcategory?: string;
    brand?: string;
}

const ProductsList = ()=> {
    const {category, subcategory, brand} = useParams<ProductParams>();
    const fetchParams: Partial<Pick<Product, 'brand' | 'product_type'>> = brand
        ? {brand}
        : {product_type: subcategory};
    const {
        data,
        loading,
        error
    } = useFetchDataObjectPromise<Product[]>(PRODUCTS_QUERY_PATH, fetchParams);


    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No products found.</p>;

    return (
        <>
            {loading ? (<Preloader/>) :
                (<ul className="catalog-grid">
                    {data.map((product : Product) => (
                        <ProductCard key={`${category}-${subcategory}-${product.id}`}{...product} />))}
                </ul>)
            }
        </>
    );
}

export default ProductsList;
