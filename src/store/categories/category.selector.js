import { createSelector } from "reselect";

// 1) Which state or which reducer we want to memoize;
const selectCategoryReducer = (state) => {
  console.log("state initail");
  return state.categories;
};

// 2) input category selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
  //here it will do equality check wheather input will be changed

  // the argument categorySlice coming from [selectCategoryReducer];
);

// output selector
export const categorySelector = createSelector(
  [selectCategories], //it will take the input selector function,
  (categories) => {
    return categories.reduce((acc, ele) => {
      const { title, items } = ele;

      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
// export const categorySelector = (state) =>
//   state.categories.categories.reduce((acc, ele) => {
//     const { title, items } = ele;

//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
