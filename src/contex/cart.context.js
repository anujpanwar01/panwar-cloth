import { createContext, useReducer } from "react";
import { createAction } from "../utilis/reducer.utilis";
//this is a helper function who check item is exist or not

const addCartItems = (cartItmes, productToAdd) => {
  // find if cartitmes contains product to add
  const isExistingItem = cartItmes.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //find give us the boolean back so we don't use filter because it return new array
  // if found then increase the quantity
  if (isExistingItem) {
    return cartItmes.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //spread all items detail and increase quantity by 1
  //retun modified array=> for both existing itme or new items inside cartitmes
  return [...cartItmes, { ...productToAdd, quantity: 1 }];
  /* for new items only*/
};
const removeCartItem = (cartItems, productToRemove) => {
  const isExistingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  //if item quantity is less1 then remove it from array
  if (isExistingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItem, productToRemove) => {
  return cartItem.filter((cartItem) => cartItem.id !== productToRemove.id);
};
// const cartCounter = function (cartItmes) {
//   return cartItmes
//     .map((item) => item.quantity)
//     .reduce((prevItem, currItem) => prevItem + currItem, 0);
// };

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [], //all items inside the cart
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  /* 
  we need to all action into one function;
  const payload={
    cartItems,
    cartCount,
    total,
  }
  */
  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error("no matches " + type);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [], //all items inside the cart
  addItemToCart: () => {}, //whose add the items
  cartCount: 0,
  cartTotal: 0,
  removeCartItem: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [total, setTotal] = useState(0);

  //add item to cart
  // const setCartItems = (productToAdd) => {
  // dispatch({ type: CART_ACTION_TYPE.CART_ITEMS, payload: productToAdd });
  // };
  // const

  // useEffect(() => {
  //   //total cart count
  //   setCartCount(
  //     cartItems.reduce((total, currCart) => total + currCart.quantity, 0)
  //   );
  // }, [cartItems]);

  // useEffect(() => {
  //   setTotal(
  //     cartItems
  //       .map((item) => item.price * item.quantity)
  //       .reduce((prev, curr) => prev + curr, 0)
  //   );
  // }, [cartItems]);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, currCart) => total + currCart.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItems(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  //clear
  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    removeItemToCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
