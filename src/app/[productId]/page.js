import path from "path";
import fs from "fs";

export async function generateStaticParams() {
  return [
    { productId: "p1" },
    { productId: "p2" },
    { productId: "p3" },
    { productId: "p4" },
  ];
}
async function getProduct(params) {
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonFile = await fs.readFileSync(filepath);
  const jsonData = JSON.parse(jsonFile);

  const product = jsonData.products.find((product) => product.id === params);
  return product;
}

async function ProductDetailPage({ params }) {
  const productId = params.productId;
  const item = await getProduct(productId);

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
