import { CART_ACTION_TYPE } from "./cart.type";
import { createAction } from "../../utilis/reducer.utilis";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool);

const addCartItems = (cartItmes, productToAdd) => {
  const isExistingItem = cartItmes.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (isExistingItem) {
    return cartItmes.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItmes, { ...productToAdd, quantity: 1 }];
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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
export const removeItemToCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
//clear
export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
