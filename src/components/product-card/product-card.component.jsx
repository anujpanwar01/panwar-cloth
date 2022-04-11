import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
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
  const dipatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dipatch(addItemToCart(cartItems, product));

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
