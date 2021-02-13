import { cartTypes } from "./cart.types";

export const addCart = payload => ({
  type: cartTypes.ADD_TO_CART,
  payload,
});

export const removeCart = payload => ({
  type: cartTypes.REMOVE_FROM_CART,
  payload,
});

export const clearCart = payload => ({
  type: cartTypes.CLEAR_FROM_CART,
  payload,
});
