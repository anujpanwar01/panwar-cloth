import { useContext } from "react";
import { CartContext } from "../../contex/cart.context";

// import { ReactComponent as ShoppingIcon } from "../../assister/shopping-bag.svg";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
