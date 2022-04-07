export const categorySelector = (state) =>
  state.categories.categories.reduce((acc, ele) => {
    const { title, items } = ele;

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
