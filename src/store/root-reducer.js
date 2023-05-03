import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});
