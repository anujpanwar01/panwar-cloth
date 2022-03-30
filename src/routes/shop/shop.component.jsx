import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import CategoreisPreview from "../categories-preview/categories-preview";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoreisPreview />} />
      <Route path=":category" element={<Category />} />
      <Route />
    </Routes>
    /*{/* /* {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((data) => {
              return <ProductCard key={data.id} product={data} />;
            })}
          </div>
        </Fragment>
      ))} */
    /* // )}
    {/* </Fragment> */
  );
};
export default Shop;
