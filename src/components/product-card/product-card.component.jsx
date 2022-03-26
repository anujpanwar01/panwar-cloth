import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";

import CustomBtn from "../custom-btn/Cutom-btn.component";
import "./product-card.styles.scss";
const ProductCard = (product) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBtn type="inverted" onClick={addProductToCart}>
        Add to cart
      </CustomBtn>
    </div>
  );
};
export default ProductCard;
