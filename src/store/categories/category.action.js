import { createAction } from "../../utilis/reducer.utilis";
import { CATEGORIES_ACTION_TYPE } from "./category.type";
import { getCollectionAndDocRef } from "../../utilis/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
};

export const fetchCategoriesAsync = async (dispatch) => {
  // 1) when the data start fetching

  dispatch(fetchCategoriesStart());

  try {
    const res = await getCollectionAndDocRef("categories");
    // 2) data caught succeed

    dispatch(fetchCategoriesSuccess(res));
  } catch (error) {
    // 3) can't able to fetch data

    dispatch(fetchCategoriesFailed(error));
  }
};
// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ITEM, categoriesArray);
