import MovieList from "@/components/MovieList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import MovieSearchForm from "@/components/movieSrachForm";
// import mock from "@/mock.json"; // 이 코드를 지우고 API를 연동해 주세요

export default function Home() {
  //   const movies = mock.movies; // 이 코드를 지우고 API를 연동해 주세요
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const res = await axios.get("/movies");
    const nextMovies = res.data.results;
    setMovies(nextMovies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <Container page>
        <MovieSearchForm />
        <MovieList className={styles.movieList} movies={movies} />
      </Container>
    </>
  );
}
