import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleWare = function (store) {
  return function (next) {
    return function (action) {
      if (!action.type) {
        return next(action);
      }
      console.log("type :", action.type);
      console.log("payload :", action.payload);
      console.log("currentState :", store.getState());

      next(action);

      console.log("next state :", store.getState());
    };
  };
};
const middleware = [loggerMiddleWare];
const composeEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composeEnhancers);
