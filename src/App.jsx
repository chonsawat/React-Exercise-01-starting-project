import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";
import { selectIsCartOpen } from "./store/cart/cart.selector";

function App() {
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Layout>
      {isCartOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
