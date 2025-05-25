import { createContext, useContext, useEffect, useState } from "react";
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

export function AuthorizationProvider({ children } : AuthorizationProviderProps ) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>(() => {
      const stored = localStorage.getItem("users");
      return stored ? JSON.parse(stored) : [];
  });
  const [loggedUser, setLoggedUser] = useState(() => {
    return localStorage.getItem("loggedUser") || guest;
  });

  const openAuthorization = () => setIsOpen(true);
  const closeAuthorization = () => setIsOpen(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setLoggedUser(storedUser);
    }
  }, []);

  function verifyUserCredentials(email : string, password : string) : boolean {
    return users.some(user => user.email === email && user.password === password);
  }

  function signIn(email: string): void {
    setLoggedUser(email);
    localStorage.setItem("loggedUser", email);
    console.log(`User with email ${email} has been signed in.`);
  }

  function signOut() : void {
    localStorage.removeItem("loggedUser");
    setLoggedUser(guest);
    closeAuthorization();
  }

  function userSignUp(userData : User) {
    setLoggedUser(userData.email);
    setUsers([...users, userData]);
    setIsOpen(false);
  }



  return (
    <AuthorizationContext.Provider
      value={{
        users,
        loggedUser,
        guest,
        openAuthorization,
        closeAuthorization,
        verifyUserCredentials,
        signIn,
        userSignUp,
        signOut,
      }}
    >
      {children}
     <LogIn isOpen={isOpen} />
    </AuthorizationContext.Provider>
  );
}
