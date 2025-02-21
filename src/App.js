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
import RegisterForm from "./components/RegisterForm/RegisterForm"

function App() {
  return (
    <>
      <div className="main-wrap">
        <ErrorBoundary>
          <BasketProvider>
            <AuthorizationProvider>
              <HeaderTop />
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category/:subcategory" element={<ProductsList />} />
                <Route path="/products/:brand" element={<ProductsList />} />
                <Route path="/products/:category/:subcategory/:id" element={<ProductDetails />} />
                <Route path="/register-form" element={<RegisterForm />} />
              </Routes>
            </AuthorizationProvider>
          </BasketProvider>
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
