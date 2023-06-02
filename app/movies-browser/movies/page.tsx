"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieData } from "@/app/api/hooks/movies/useMovies";
import { Container } from "@/app/components/Container";
import { Main } from "@/app/components/Main";
import { GridList } from "@/app/components/GridList";
import { Tile } from "@/app/components/Tile";

export default function PopularMovies() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovieData,
  });

  if (isLoading) {
    return "Trwa ładowanie...";
  }

  if (error instanceof Error) {
    return `Mamy błąd: ${error.message}`;
  }

  return (
    <Main>
      <Container>
        <GridList>
          {data?.map((movies) => (
            <li key={movies.id}>
              <Link href="/movies-browser/movies">
                <Tile
                  id={movies.id}
                  title={movies.title}
                  poster_path={movies.poster_path}
                  vote_average={movies.vote_average}
                  vote_count={movies.vote_count}
                  relase_date={movies.relase_date}
                  genre_ids={movies.genre_ids}
                />
              </Link>
            </li>
          ))}
        </GridList>
      </Container>
    </Main>
  );
}
