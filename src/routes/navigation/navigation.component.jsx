import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PanwarLogo } from "../../assister/panwar.svg";
import { UserContext } from "../../contex/user.context";
import "./navigation.styles.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../utilis/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contex/cart.context";

const Navigation = function () {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOut(auth);
    // it gives back the undefined
    // setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>{<PanwarLogo />}</div>
        </Link>

        <div className="nav-link-container">
          <Link className="nav-link" to={"/shop"}>
            shop
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to={"/auth"}>
              Sign In
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
