import { createAction } from "../../utilis/reducer.utilis";
import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ITEM, categoriesArray);
