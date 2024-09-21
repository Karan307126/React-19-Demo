import { memo } from "react";
import products from "../data";
import { sleep } from "../utils";

const SlowProduct = ({ product }) => {
  sleep(1);
  return <li>Product {product.name}</li>;
};

const Products = memo(function Products() {
  let productList = products.map((product) => (
    <SlowProduct key={product.id} product={product} />
  ));
  return (
    <>
      <h1>Products</h1>
      <ul>{productList}</ul>
    </>
  );
});

export default Products;
