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

interface ProductColor {
    hex_value: string;
    colour_name?: string;
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



