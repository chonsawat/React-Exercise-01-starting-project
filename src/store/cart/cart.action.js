export const addToCart = (cartItems, cartToAdd) => {
  const existCartItem = cartItems.find(
    (cart) => cart.title === cartToAdd.title
  );

  if (existCartItem) {
    const newCartItems = cartItems.map((cart) => {
      if (cart.title === existCartItem.title) {
        cart.quantity = cart.quantity + 1;
        cart.total = cart.quantity * cart.price;
      }
      return cart;
    });
    return newCartItems;
  } else {
    cartItems.push({
      title: cartToAdd.title,
      price: cartToAdd.price,
      quantity: 1,
      total: cartToAdd.price,
    });
    return cartItems;
  }
};

export const removeProductToCart = (cartItems, cartToRemove) => {
  const existCartItem = cartItems.find(
    (cart) => cart.title === cartToRemove.title
  );

  if (existCartItem.quantity === 1)
    return cartItems.filter((cart) => cart.title !== existCartItem.title);

  if (existCartItem) {
    const newCartItems = cartItems.map((cart) => {
      if (cart.title === existCartItem.title) {
        cart.quantity = cart.quantity - 1;
        cart.total = cart.quantity * cart.price;
      }
      return cart;
    });

    return newCartItems;
  } else {
    return cartItems;
  }
};
