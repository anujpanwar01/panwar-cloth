import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  ArrowBtn,
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Info,
} from "./checkout-item.styles";
import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = (item) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, quantity, price } = item;

  //handlers
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItems, item));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Info>{name}</Info>
      <Info display={"flex"}>
        <ArrowBtn onClick={removeItemHandler}>&#10094;</ArrowBtn>
        <span className="value">{quantity}</span>
        <ArrowBtn onClick={addItemHandler}>&#10095;</ArrowBtn>
      </Info>
      <Info>{price}</Info>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
