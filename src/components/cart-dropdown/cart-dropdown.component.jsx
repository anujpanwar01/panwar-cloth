import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomBtn from "../custom-btn/Cutom-btn.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckOutPage = () => {
    navigate("/check-out");
  };

  return (
    <div className="cart-dropdown-container">
      {!cartItems.length <= 0 ? (
        <div className="cart-itmes">
          {cartItems.map((ele) => (
            <CartItem key={ele.id} {...ele} />
          ))}
        </div>
      ) : (
        <span>add your items</span>
      )}
      <CustomBtn onClick={goToCheckOutPage}>
        {/* <Link to="/check-out">Go to Checkout</Link> */}
        Go to Checkout
      </CustomBtn>
    </div>
  );
};
export default CartDropdown;
