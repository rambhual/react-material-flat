import { createSelector } from "reselect";
const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], c => c.cartItems);
export const selectCartItemsTotal = createSelector([selectCart], c =>
  c.cartItems.reduce((total, item) => total + item.quantity, 0),
);
