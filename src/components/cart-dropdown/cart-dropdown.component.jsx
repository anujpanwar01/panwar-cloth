import CustomBtn from "../custom-btn/Cutom-btn.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-itmes" />
      <CustomBtn>Go to Checkout</CustomBtn>
    </div>
  );
};
export default CartDropdown;
