import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUser } from "../utilis/firebase.utils";

// as the actual value you want to access
//default value
//literal context => storing actual thing itself

export const UserContext = createContext({
  currentUser: null, //empty state of object
  setCurrentUser: () => null,
});

// a component where we wrap entire app
//in here we can acccess state in our components
export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        createUser(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser }; //value is an object

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
