import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";
import CategoreisPreview from "../categories-preview/categories-preview";
import Category from "../category/category.component";

import { fetchCategoriesAsync } from "../../store/categories/category.action";

const Shop = () => {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(fetchCategoriesAsync);
  }, [dipatch]);

  return (
    <Routes>
      <Route index element={<CategoreisPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;

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
