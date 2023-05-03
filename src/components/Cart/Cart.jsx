import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const Cart = (props) => {
  const cartItems = useSelector(selectCartItems);
  console.log("cartItems Cart.js", cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem key={item.title} cartItems={cartItems} item={item} />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
