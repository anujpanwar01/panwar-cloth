import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CategoriesContext } from "../../contex/categories.context";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext); //intial state it is an empty object
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <div className="category-container">
      {/* this means if products is undefined then don't render the products map */}
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
export default Category;
