import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const data = await getProduct();
  const params = data.products.map((product) => ({ pid: product.id }));
  return params;
}
async function getProduct(params) {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonFile = await fs.readFileSync(filepath);
  const jsonData = JSON.parse(jsonFile);

  if (!params) return jsonData;

  const product = jsonData.products.find((product) => product.id === params);

  if (!product) return notFound();

  return product;
}

async function ProductDetailPage(props) {
  const { pid } = props.params;
  const item = await getProduct(pid);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </section>
  );
}

export default ProductDetailPage;
