import { createContext, useContext, useEffect, useState } from "react";
import Authorization from "../../components/Authorization/Authorization";

const guest = "guest@guest";

const AuthorizationContext = createContext({});

export function useAuthorization() {
  return useContext(AuthorizationContext);
}

export function AuthorizationProvider({ children }) {
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

  function signIn(email) {
    setLoggedUser(email);
    localStorage.setItem("loggedUser", email);
    console.log(`User with email ${email} has been signed in.`);
  }

  function signOut() {
    console.log(`User ${loggedUser} is logging out.`);
    localStorage.removeItem("loggedUser");
    setLoggedUser(guest);
    closeAuthorization();
  }

  function userSignUp(userData) {
    setLoggedUser(userData.email);
    setUsers([...users, userData]);
    setIsOpen(false);
    console.log(`User with email ${userData.email} has been signed up.`);
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
      <Authorization isOpen={isOpen} />
    </AuthorizationContext.Provider>
  );
}
