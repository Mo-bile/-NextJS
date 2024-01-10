import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextProducts = res.data.results;
    setProducts(nextProducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <ProductList products={products} />
      <h2>{q} 검색결과</h2>
    </div>
  );
}
