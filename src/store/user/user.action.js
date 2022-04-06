import { createAction } from "../../utilis/reducer.utilis";
import { USER_ACTION_TYPE } from "./user.types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
