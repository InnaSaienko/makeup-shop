import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { BasketProvider } from "./context/BasketContext/BasketContext";
import { AuthorizationProvider } from "./context/AuthorizationContext/AuthorizationContext";
import { ProductProvider } from "./context/ProductContext/ProductContext";
import { HeaderTop } from "./layout/HeaderTop/HeaderTop";
import { Navigation } from "./layout/Navigation/Navigation";
import { Footer } from "./layout/Footer/Footer";
import { Home } from "./pages/Home";
import Products from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import RegisterForm from "./components/RegisterForm/RegisterForm"

function App() {
  return (
    <>
      <div className="main-wrap">
        <ErrorBoundary>
          <AuthorizationProvider>
            <ProductProvider>
              <BasketProvider>
                <HeaderTop />
                <Navigation />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products/:productType/:subcategory" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/register-form" element={<RegisterForm />} />
                </Routes>
              </BasketProvider>
            </ProductProvider>
          </AuthorizationProvider>
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
