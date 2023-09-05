import styles from "./page.module.css";
import React from "react";
import path from "path";
import fs from "fs";

async function getProducts() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonFile = await fs.readFileSync(filePath);
  return JSON.parse(jsonFile as string);
}

export default async function HomePage() {
  const { products } = await getProducts();
  console.log(products);
  return (
    <main className={styles.main}>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}
