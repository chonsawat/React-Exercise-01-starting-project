import { createSelector } from "reselect";

const product = (state) => state.product;

export const selectProductItems = createSelector(
  [product],
  (product) => product.productItems
);
