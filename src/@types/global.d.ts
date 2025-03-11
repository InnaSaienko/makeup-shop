declare global {
    interface Product {
        id: number;
        name: string;
        api_featured_image: string;
        product_type: string;
        price: string;
        currency: string;
        product_colors?: { hex_value: string; colour_name?: string }[];
    }

    interface Filters {
        product_type?: string;
        brand?: string;
    }

}
