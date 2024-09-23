import React from "react";
import "./App.scss"
import { Routes, Route } from "react-router-dom";
import { HeaderTop } from "./layout/HeaderTop/HeaderTop";
import { Navigation } from "./layout/Navigation/Navigation";
import { Footer } from "./layout/Footer/Footer";
import { Home } from "./pages/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";


function App() {
    
  return (
    <>
      <div className="main-wrap">
        <Navigation />
        <HeaderTop />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productType" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
