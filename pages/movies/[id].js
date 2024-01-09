import { useRouter } from "next/router";
export default function movies() {
  const router = useRouter();
  const { id } = router.query;
  return <div>movie {id} 페이지</div>;
}
