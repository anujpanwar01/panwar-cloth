import { Fragment } from "react";

import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";

import { categorySelector } from "../../store/categories/category.selector";

const CategoreisPreview = () => {
  const categories = useSelector(categorySelector);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoreisPreview;
