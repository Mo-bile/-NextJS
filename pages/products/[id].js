import SizeReviewList from "@/components/SizeReviewList";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState();
  const [sizeReview, setSizeReview] = useState();
  const router = useRouter();
  const { id } = router.query;

  async function getProduct(targetId) {
    const res = await axios.get(`/products/${targetId}`);
    const nextProdcut = res.data;
    setProduct(nextProdcut);
  }
  async function getSizeReview(targetId) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? []; //값이 없느경우 빈 배열로
    setSizeReview(nextSizeReviews);
  }

  useEffect(() => {
    if (!id) return;
    getProduct(id);
    getSizeReview(id);
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
      <SizeReviewList sizeReviews={sizeReview} />
    </div>
  );
}
