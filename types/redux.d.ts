interface ImportMeta {
    env: {
        MODE: string;
    };
}

interface User {
    first_name:  string,
    last_name: string,
    date_of_birth: string,
    phone: string,
    email: string;
    password: string,
    repeat_password?: string,
}

interface AuthState {
    user: User;
    isLoggedIn: boolean;
    isOpen: boolean,
}

interface BasketState {
    items: BasketItem[];
    isOpen: boolean,
}

interface BasketItem {
    id: string;
    selectedColor: string;
    product_type: string;
    quantity: number;
}