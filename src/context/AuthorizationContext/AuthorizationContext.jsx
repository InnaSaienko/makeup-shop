import { createContext, useContext, useEffect, useState } from "react";
import {AuthorizationFormik} from "../../components/Authorization/AuthorizationFormik";

const guest = "guest@guest";

const AuthorizationContext = createContext({});

export function useAuthorization() {
  return useContext(AuthorizationContext);
}

export function AuthorizationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState(() => {
      return localStorage.getItem("loggedUser") || []
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

  function verifyUserCredentials(email, password) {
    return users.some(user => user.email === email && user.password === password);
  }

  function signIn(email) {
    setLoggedUser(email);
    localStorage.setItem("loggedUser", email);
    console.log(`User with email ${email} has been signed in.`);
  }

  function signOut() {
    localStorage.removeItem("loggedUser");
    setLoggedUser(guest);
    closeAuthorization();
  }

  function userSignUp(userData) {
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
     <AuthorizationFormik isOpen={isOpen} />
    </AuthorizationContext.Provider>
  );
}
