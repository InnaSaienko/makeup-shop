interface ImportMeta {
    env: {
        MODE: string;
    };
}

interface User {
    email: string;
    password: string;
}

interface AuthState {
    users: User[];
    loggedUser: string;
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