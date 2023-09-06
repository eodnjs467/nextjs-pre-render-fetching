import styles from "./page.module.css";
import React from "react";
import path from "path";
import fs from "fs";
import { notFound, redirect } from "next/navigation";

async function getProducts() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonFile = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonFile as string);
  if (!data) return redirect("/no-data");
  if (data.products.length === 0) return notFound();

  return data;
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
