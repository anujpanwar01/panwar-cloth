import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";

import CartItem from "../cart-item/cart-item.component";
import CustomBtn from "../custom-btn/Cutom-btn.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-itmes">
        {cartItems.map((ele) => (
          <CartItem key={ele.id} {...ele} />
        ))}
      </div>
      <CustomBtn>Go to Checkout</CustomBtn>
    </div>
  );
};
export default CartDropdown;
