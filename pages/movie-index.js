import Link from "next/link";
import MovieSearchForm from "@/components/movieSrachForm";

export default function movieIndex() {
  return (
    <>
      <h1>watchit</h1>
      <MovieSearchForm />
      <ul>
        <li>
          <Link href="/movies/1">1번 영화</Link>
        </li>

        <li>
          <Link href="/movies/2">2번 영화</Link>
        </li>

        <li>
          <Link href="/movies/3">3번 영화</Link>
        </li>
      </ul>
    </>
  );
}
