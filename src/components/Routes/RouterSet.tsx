import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {Preloader} from "../Preloader/Preloader";

// @ts-ignore
const Home = lazy(() => import("../../pages/Home.jsx") as Promise<{ default: React.ComponentType<any> }>);
const ProductDetails = lazy(() => import("../../components/ProductDetails/ProductDetails") as Promise<{
    default: React.ComponentType<any>
}>);
// @ts-ignore
const RegisterForm = lazy(() => import("../../components/RegisterForm/RegisterForm") as Promise<{
    default: React.ComponentType<any>
}>);
const ProductsList = lazy(() => import("../ProductsList/ProductsList") as Promise<{
    default: React.ComponentType<any>
}>);

const RouterSet = () => {

    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
                <Route path="/products/:category/:subcategory" element={<ProductsList/>}/>
                <Route path="/brand/:brand" element={<ProductsList/>}/>
                <Route path="/register-form" element={<RegisterForm/>}/>
            </Routes>
        </Suspense>
    )
};

export default RouterSet;