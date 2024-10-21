import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useLocation } from 'react-router-dom';
import { Preloader } from "../Preloader/Preloader"
import "./ProductsList.scss"


function Products() {
  const location = useLocation();
  const { productType } = location.state;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productType}`)
    .then((response) => response.json())
    .then((data) => {setData(data); setLoading(false)});
  }, [productType]);

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
