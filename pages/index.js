import Link from "next/link";
import styles from "@/styles/Home.module.css";
import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("/products");
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Codeitmall</h1>
      <SearchForm />
      <ul>
        <li>
          <Link href="/products/1">첫 번째 상품</Link>
        </li>
        <li>
          <Link href="/products/2">두 번째 상품</Link>
        </li>
        <li>
          <a href="/products/3">세 번째 상품</a>
        </li>
        <li>
          <Link href="https://google.com">구글</Link>
        </li>
      </ul>
      <ProductList products={products} />
    </div>
  );
}
