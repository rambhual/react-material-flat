import { cartTypes } from "./cart.types";
import { addToCart, removeFromCart } from "./cart.utils";

const initialState = {
  cartItems: [],
  loading: false,
  errorMessage: "",
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.ADD_TO_CART:
      return { ...state, cartItems: addToCart(state.cartItems, payload) };

    case cartTypes.REMOVE_FROM_CART:
      return { ...state, cartItems: removeFromCart(state.cartItems, payload) };

    case cartTypes.CLEAR_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cart => cart.id !== payload),
      };
    default:
      return state;
  }
};
