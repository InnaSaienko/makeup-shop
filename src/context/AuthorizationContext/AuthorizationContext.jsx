import { createContext, useContext, useEffect, useState } from "react";
import Authorization from "../../components/Authorization/Authorization";
import { useBasket } from "../BasketContext/BasketContext";

const guest = "guest@guest";

const AuthorizationContext = createContext({});

export function useAuthorization() {
  return useContext(AuthorizationContext);
}

export function AuthorizationProvider({ children }) {
  const { setBasketProductsContext } = useBasket();
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  
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

  function verifyUserCredentials(email, password) {
    return users.some(user => user.email === email && user.password === password);
  }

  function userSignIn(email) {
    const user = users.find(user => user.email === email);
    if (user) {
      setLoggedUser(email);
      localStorage.setItem("loggedUser", email);

     const storedBasket = localStorage.getItem(email);
      if (storedBasket) {
        setBasketProductsContext(JSON.parse(storedBasket));
      } else {
        setBasketProductsContext([]);
      }
      
      console.log(`User with email ${email} has been signed in.`);
    }
  }

  function userSignUp(userData) {
    setLoggedUser(userData.email);
    setUsers([...users, userData]);
    localStorage.setItem("loggedUser", userData.email); 
    setIsOpen(false);
    console.log(`User with email ${userData.email} has been signed up.`);
  }

  function signOut() {
    console.log(`User with email ${loggedUser} is logging out.`);
    
    if (loggedUser !== guest) {
      const userBasket = localStorage.getItem(loggedUser);
      if (userBasket) {
        localStorage.setItem(guest, userBasket);
      }
    }

    setLoggedUser(guest);
    setBasketProductsContext([]);
    
    localStorage.removeItem("loggedUser");
    localStorage.setItem("loggedUser", guest);
    
    closeAuthorization();
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
        userSignIn,
        userSignUp,
        signOut,
      }}
    >
      {children}
      <Authorization isOpen={isOpen} />
    </AuthorizationContext.Provider>
  );
}
