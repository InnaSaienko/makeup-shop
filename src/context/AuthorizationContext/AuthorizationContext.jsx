import { createContext, useContext } from "react";
import { useState } from "react";
import Authorization from "../../components/Authorization/Authorization";
const guest = "guest@guest"; 

const AuthorizationContext = createContext({});

export function useAuthorization() {
  return useContext(AuthorizationContext);
}
export function AuthorizationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
  const openAuthorization = () => setIsOpen(true);
  const closeAuthorization = () => setIsOpen(false);

  function verifyUserCredentials(email, password) {
    return users.some(user => user.email === email && user.password === password);
  }

  function userSignIn(email) {
    const user = users.find(user => user.email === email);

    if (user) {
      setLoggedUser(email);
      localStorage.setItem(loggedUser, JSON.stringify());
      console.log(`User with email ${loggedUser} has been signed in.`);
    }
  }

  function userSignUp(userData) {
    setLoggedUser(userData.email);
    setUsers([...users, userData]);
    setIsOpen(false);
    localStorage.setItem(loggedUser, JSON.stringify("true"));
    console.log(`User with email ${loggedUser} has been signed up.`);
  }

  function logOut(email) {
    localStorage.removeItem(loggedUser);
    setLoggedUser(guest);
    localStorage.setItem(guest, JSON.stringify("true"));    
    closeAuthorization();
  
    console.log(`User with email ${email} has been logged out.`);
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
        logOut,
      }}
    >
      {children}
      <Authorization isOpen={isOpen} />
    </AuthorizationContext.Provider>
  );
}
