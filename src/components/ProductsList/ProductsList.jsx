import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useLocation } from 'react-router-dom';
import FetchData from "../ApiServices/ApiServices";
import { Preloader } from "../Preloader/Preloader"
import "./ProductsList.scss"


function Products() {
  const location = useLocation();
  const { productType } = location.state;
  const { data, loading } = FetchData(`?product_type=${productType}`);

  return (
    <ul className="catalog-grid">
      
      {loading ? (
        <Preloader />
      ) : (
        data.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </ul>
   
  );
}

export default  Products;
