import { useRouter } from "next/router";
import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Search.module.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
// import mock from "@/mock.json"; // 이 코드를 지우고 API를 연동해 주세요
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [movies, setMovies] = useState();
  const router = useRouter();
  const { q } = router.query;

  async function getMovies(query) {
    console.log(query);
    const res = await axios.get(`/movies/?q=${query}`);
    const NextMovies = res.data.results;
    setMovies(NextMovies);
  }

  useEffect(() => {
    getMovies(q);
  }, [q]);

  return (
    <>
      <Header />
      <Container page>
        <SearchForm initialValue={q} />
        <h2 className={styles.title}>
          <span className={styles.keyword}>{q}</span> 검색 결과
        </h2>
        <MovieList movies={movies} />
      </Container>
    </>
  );
}
