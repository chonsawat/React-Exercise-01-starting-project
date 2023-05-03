import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import { useSelector } from "react-redux";
import { selectProductItems } from "../../store/product/product.selector";

const Products = (props) => {
  const productItem = useSelector(selectProductItems);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItem &&
          productItem.map((product) => {
            const { title, price, description } = product;
            return (
              <ProductItem
                key={title}
                title={title}
                price={price}
                description={description}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Products;
