import Link from "next/link";

function ProductItem({ id, title }) {
  return (
    <li>
      <Link href={`/${id}`}>{title}</Link>
    </li>
  );
}

export default ProductItem;
