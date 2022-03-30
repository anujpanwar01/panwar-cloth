import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contex/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
// import "./categories-preview.styles.scss";

const CategoreisPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default CategoreisPreview;
