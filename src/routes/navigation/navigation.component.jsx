import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as PanwarLogo } from "../../assister/panwar.svg";
// import { UserContext } from "../../contex/user.context";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../../utilis/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { CartContext } from "../../contex/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const Navigation = function () {
  // const { currentUser } = useContext(UserContext);

  // const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    await signOut(auth);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>{<PanwarLogo />}</LogoContainer>

        <NavLinks>
          <NavLink to={"/shop"}>shop</NavLink>
          {!currentUser ? (
            <NavLink to={"/auth"}>Sign In</NavLink>
          ) : (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
