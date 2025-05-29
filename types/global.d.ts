interface Product {
    id: string;
    name: string;
    brand: string;
    rating: number | null;
    api_featured_image: string;
    product_type: string;
    category: string | null;
    price: string;
    currency: string;
    tag_list?: string[];
    description?: string;
    product_colors?: { hex_value: string; colour_name?: string }[];
    selectedColor?: { hex_value: string; colour_name?: string };
}



interface BasketContextType {
    basketProductsContext: BasketItem[];
    setBasketProductsContext: React.Dispatch<React.SetStateAction<BasketItem[]>>;
    addProduct: (id: string, selectedColor: string, product_type: string) => void;
    decreaseQuantity: (id: string, selectedColor: string) => void;
    removeFromBasket: (id: string, selectedColor: string) => void;
    getUniqueProductQuantity: (id: string, selectedColor: string) => number;
    getProductQuantity: () => number | null;
    openBasket: () => void;
    closeBasket: () => void;
}

interface BasketProps {
    isOpen: boolean;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

type UseFetchDataReturn<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
}

type ErrorHandler = (reason: any) => void;

interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    direction: "next" | "prev";
    svg?: boolean;
}

declare module 'react-slick' {
    import React, { Component } from 'react';

    interface SliderProps {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        nextArrow?: React.ReactNode;
        prevArrow?: React.ReactNode;
    }

    export default class Slider extends Component<SliderProps> {}
}

declare function require(context: string): any;

interface Require {
    context(directory: string, useSubdirectories: boolean, regExp: RegExp): {
        keys: () => string[];
        (id: string): string;
    };
}

interface AuthorizationProviderProps {
    children: React.ReactNode;
}

interface AuthorizationContextType {
    users: User[];
    isLoggedIn: boolean;
    loggedUser: string;
    guest: string;
    openAuthorization: () => void;
    closeAuthorization: () => void;
    verifyUserCredentials: (email: string, password: string) => boolean;
    logIn: (email: string) => void;
    signOut: (loggedUser: string) => void;
    userSignUp: (userData: User) => void;
}

interface User {
    first_name: string,
    last_name: string,
    birthday: string,
    phone: string,
    email: string,
    password: string,
    repeat_password?: string,
}

