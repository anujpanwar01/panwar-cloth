import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";
import {
  ArrowBtn,
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Info,
} from "./checkout-item.styles";
const CheckoutItem = (item) => {
  const { name, imageUrl, quantity, price } = item;

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext);

  //handlers
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemToCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

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
