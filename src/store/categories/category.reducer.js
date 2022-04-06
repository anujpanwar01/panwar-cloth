import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_ITEM:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};
