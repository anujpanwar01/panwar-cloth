import { createContext, useEffect, useState } from "react";
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

// const cartCounter = function (cartItmes) {
//   return cartItmes
//     .map((item) => item.quantity)
//     .reduce((prevItem, currItem) => prevItem + currItem, 0);
// };

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [], //all items inside the cart
  addItemToCart: () => {}, //whose add the items
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //add item to cart
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  useEffect(() => {
    //total cart count
    setCartCount(
      cartItems.reduce((total, currCart) => total + currCart.quantity, 0)
    );
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
