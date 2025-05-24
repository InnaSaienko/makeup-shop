import React, {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";
import {Preloader} from "../Preloader/Preloader";


const Home = lazy(() => import("../../pages/Home"));
// const Authorization = lazy(() => import("../../components/Authorization/Authorization"));
const ProductDetails = lazy(() => import("../../components/ProductDetails/ProductDetails"));
const RegisterFormikForm = lazy(() => import("../../pages/RegisterForm/RegisterFormikForm"));
const ProductsList  = lazy(() => import("../ProductsList/ProductsList"));


const RouterSet = () => {

    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/login" element={<Authorization/>}/>*/}
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/:category/:subcategory" element={<ProductsList />} />
                <Route path="/brand/:brand" element={<ProductsList />} />
                <Route path="/register-form" element={<RegisterFormikForm />} />
            </Routes>
        </Suspense>
    )
};

export default RouterSet;