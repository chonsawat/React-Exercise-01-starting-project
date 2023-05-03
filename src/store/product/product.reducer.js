import { createSlice } from "@reduxjs/toolkit";

// export const addToCart = (cartItems, productToAdd) => {
//   const existCartItem = cartItems.find(
//     (cart) => cart.title === productToAdd.title
//   );

//   let newCartItems = [];
//   if (existCartItem) {
//     newCartItems = cartItems.map((cart) => {
//       if (cart.title === existCartItem.title) {
//         cart.quantity = cart.quantity + 1;
//       }
//       return cart;
//     });
//   } else {
//     cartItems.push({
//       title: productToAdd.title,
//       price: productToAdd.price,
//       quantity: 1,
//       total: productToAdd.price,
//     });
//     newCartItems = [...cartItems];
//   }

//   return {
//     type: PRODUCT_TYPE_ACTIONS.ADD_PRODUCT_TO_CART,
//     payload: [...newCartItems],
//   };
// };

const initialState = {
  productItems: [
    {
      title: "Rubber",
      price: 6,
      description: "This is a Rubber",
    },
    {
      title: "Microwave",
      price: 1000,
      description: "This is a Microwave",
    },
    {
      title: "Pecil",
      price: 10,
      description: "This is a Pecil",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: [],
});

export const productReducer = productSlice.reducer;
