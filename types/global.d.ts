interface Product {
    id: string;
    name: string;
    api_featured_image: string;
    product_type: string;
    category: string | null;
    price: string;
    currency: string;
    product_colors?: { hex_value: string; colour_name?: string }[];
    selectedColor?: { hex_value: string; colour_name?: string };
}

interface BasketItem {
    id: string;
    selectedColor: string;
    product_type: string;
    quantity: number;
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

interface BasketItem extends Product {
    selectedColor:  { hex_value: string; colour_name?: string };
    quantity: number;
}

interface BasketProps {
    isOpen: boolean;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

