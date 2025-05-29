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
}

interface BasketState {
    items: BasketItem[];
}
