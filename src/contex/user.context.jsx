import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUser } from "../utilis/firebase.utils";
import { createAction } from "../utilis/reducer.utilis";

// as the actual value you want to access
//default value
//literal context => storing actual thing itself

export const UserContext = createContext({
  currentUser: null, //empty state of object
  setCurrentUser: () => null,
});

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SER_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  console.log(action, "dispatch");
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`sorry`);
  }
};
// a component where we wrap entire app
//in here we can acccess state in our components
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        createUser(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser }; //value is an object

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
