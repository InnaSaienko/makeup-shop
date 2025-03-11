import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.ts";
import { ProductCard } from "../ProductCard/ProductCard";
import { Preloader } from "../Preloader/Preloader";
import {PRODUCTS_QUERY_PATH} from "../../constatnts/path";
import "./ProductsList.scss";


function ProductsList() {
  const { category, subcategory, brand} = useParams();
  const fetchParams = brand ? { brand } : { product_type: subcategory };
  const { data, loading, error } = useFetchData(PRODUCTS_QUERY_PATH, fetchParams);


  if (loading) { return <Preloader />; }
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="catalog-grid">
      {data.map((product) => <ProductCard key={`${category}-${subcategory}-${product.id}`}
        category={category}
        subcategory={subcategory} {...product} />)}
    </ul>
  );
}

export default ProductsList;
