import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomBtn from "../custom-btn/Cutom-btn.component";
import {
  CartDropdownContainer,
  CartItmes,
  EmptyMsg,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckOutPage = () => {
    navigate("/check-out");
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItmes>
          {cartItems.map((ele) => (
            <CartItem key={ele.id} {...ele} />
          ))}
        </CartItmes>
      ) : (
        <EmptyMsg>Your Cart is Empty</EmptyMsg>
      )}
      <CustomBtn onClick={goToCheckOutPage}>
        {/* <Link to="/check-out">Go to Checkout</Link> */}
        Go to Checkout
      </CustomBtn>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
