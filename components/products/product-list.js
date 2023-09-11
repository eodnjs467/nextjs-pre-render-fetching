import ProductItem from "./product-item";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <ProductItem key={product.id} id={product.id} title={product.title} />
      ))}
    </ul>
  );
}

export default ProductList;
