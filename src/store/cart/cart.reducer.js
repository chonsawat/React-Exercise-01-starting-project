import { createSlice } from "@reduxjs/toolkit";
import { addToCart, removeProductToCart } from "./cart.action";

const initialState = {
  isCartOpen: true,
  items: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartItem: (state, action) => {
      state.items = action.payload;
    },
    addProductToCart: (state, action) => {
      state.items = addToCart(state.items, action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.items = removeProductToCart(state.items, action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  setIsCartOpen,
  setCartItem,
  addProductToCart,
  removeProductFromCart,
} = cartSlice.actions;
