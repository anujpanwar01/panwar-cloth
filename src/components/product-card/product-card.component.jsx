import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";

import CustomBtn, {
  BUTTON_TYPE_CLASSES,
} from "../custom-btn/Cutom-btn.component";

import {
  ProductCardContainer,
  Price,
  Name,
  Footer,
  Img,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  // const }=product

  const { name, imageUrl, price } = product;
  // console.log(name, imageUrl, price);
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CustomBtn
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </CustomBtn>
    </ProductCardContainer>
  );
};
export default ProductCard;
