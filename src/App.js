import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { BasketProvider } from "./context/BasketContext/BasketContext";
import { AuthorizationProvider } from "./context/AuthorizationContext/AuthorizationContext";
import { HeaderTop } from "./layout/HeaderTop/HeaderTop";
import { Navigation } from "./layout/Navigation/Navigation";
import { Footer } from "./layout/Footer/Footer";
import { Home } from "./pages/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import {RegisterFormikForm} from "./components/RegisterForm/RegisterFormikForm";

function App() {
  return (
    <>
      <div className="main-wrap">
        <ErrorBoundary>
          <AuthorizationProvider>
            <BasketProvider>
              <HeaderTop />
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/:category/:subcategory" element={<ProductsList />} />
                <Route path="/brand/:brand" element={<ProductsList />} />
                <Route path="/register-form" element={<RegisterFormikForm />} />
              </Routes>
            </BasketProvider>
          </AuthorizationProvider>
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
