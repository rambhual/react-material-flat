export const addToCart = (cartItems, cartItemToAdd) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );
  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.id === existingCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeFromCart = (cartItems, cartItemToRemoveId) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.id === cartItemToRemoveId,
  );
  if (existingCart.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemoveId);
  }
  return cartItems.map(cartItem =>
    cartItem.id === existingCart.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
