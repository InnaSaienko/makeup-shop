import {createContext, FC, useContext, useEffect, useState} from "react";
import {LogIn} from "../../components/LogIn/LogIn";

const guest = "guest@example.com";

const AuthorizationContext = createContext<AuthorizationContextType | null>(null);

export function useAuthorization() {
    const context = useContext(AuthorizationContext);

    if (!context) {
        throw new Error("useAuthorization must be used within a AuthorizationProvider");
    }
    return context;
}

export const AuthorizationProvider: FC<AuthorizationProviderProps> =
({children}) =>
{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>(() => {
        const stored = localStorage.getItem("users");
        return stored ? JSON.parse(stored) : [];
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState(() => {
        return localStorage.getItem("loggedUser") || guest;
    });

    const openAuthorization = () => setIsOpen(true);
    const closeAuthorization = () => setIsOpen(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedUser");
        if (storedUser) {
            setLoggedUser(storedUser);
            setIsLoggedIn(true);
        }
    }, []);

    function verifyUserCredentials(email: string, password: string): boolean {
        return users.some(user => user.email === email && user.password === password);
    }

    function logIn(email: string): void {
        setLoggedUser(email);
        setIsLoggedIn(true);
        localStorage.setItem("loggedUser", email);
        console.log(`User with email ${email} has been signed in.`);
    }

    function signOut(): void {
        localStorage.removeItem("loggedUser");
        setLoggedUser(guest);
        setIsLoggedIn(false);
        closeAuthorization();
    }

    function userSignUp(userData: User) {
        setLoggedUser(userData.email);
        setIsLoggedIn(true);
        setUsers([...users, userData]);
        setIsOpen(false);
    }


    return (
        <AuthorizationContext.Provider
            value={{
                users,
                loggedUser,
                isLoggedIn,
                guest,
                openAuthorization,
                closeAuthorization,
                verifyUserCredentials,
                logIn,
                userSignUp,
                signOut,
            }}
        >
            {children}
            <LogIn isOpen={isOpen}/>
        </AuthorizationContext.Provider>
    );
}
