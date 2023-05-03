import { createSelector } from "reselect";

export const selectIsCartOpen = (state) => state.cart.isCartOpen;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);
