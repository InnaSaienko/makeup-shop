import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { ProductCard } from "../ProductCard/ProductCard";
import { Preloader } from "../Preloader/Preloader";
import "./ProductsList.scss";


function ProductsList() {
  const { category, subcategory } = useParams();
  const { data, loading, error } = useFetchData({ product_type: subcategory });
  
  if (loading) { return <Preloader />; };
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
