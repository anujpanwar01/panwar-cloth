import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categorySelector } from "../../store/categories/category.selector";
import { useEffect, useState, Fragment } from "react";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categorySelector);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* this means if products is undefined then don't render the products map */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
