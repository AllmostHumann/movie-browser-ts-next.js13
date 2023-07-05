"use client";

import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { fetchMoviesData } from "@/app/api/hooks/movies/useMovies";
import { Container } from "@/app/components/Container/container";
import { Main } from "@/app/components/Main/main";
import { GridList } from "@/app/components/GridList/gridList";
import { MovieTile } from "@/app/components/Tiles/MovieTile/movieTile";
import { SectionTitle } from "@/app/components/SectionTitle/sectionTitle";
import { Pagination } from "@/app/components/Pagination/pagination";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";
import { fetchMovieQuery } from "@/app/api/hooks/queries/useQuery";
import { ErrorPage } from "@/app/components/Status/Error/error";
import { LoadingPage } from "@/app/components/Status/Loading/loading";
import { NoResult } from "@/app/components/Status/NoResult/noResult";

export default function PopularMovies() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const [moviesList, searchMovie] = useQueries({
    queries: [
      {
        queryKey: ["moviesList", { page }],
        queryFn: () => fetchMoviesData({ page }),
        keepPreviousData: true,
      },
      {
        queryKey: ["searchMovie", { query, page }],
        queryFn: () => fetchMovieQuery({ query, page }),
        keepPreviousData: true,
        enabled: !!query,
      },
    ],
  });

  const {
    data: popularMovies,
    isLoading: moviesListLoading,
    error: moviesListError,
  } = moviesList;
  const {
    data: filteredMovies,
    isLoading: searchMovieLoading,
    error: searchMovieError,
  } = searchMovie;

  if (moviesListLoading && searchMovieLoading) {
    return <LoadingPage />;
  }

  if (moviesListError && searchMovieError instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <Main
      moviesList={true}
      moviePage={false}
    >
      {query && !filteredMovies?.total_results ? (
        <NoResult query={query} />
      ) : (
        <Container>
          <section>
            <SectionTitle
              list={true}
              movieDetails={false}
            >
              {query
                ? `Search results for "${query}" (${filteredMovies?.total_results})`
                : "Popular movies"}
            </SectionTitle>
            <GridList
              people={false}
              movies={true}
            >
              {!query &&
                popularMovies?.results?.map((movie) => (
                  <li key={movie.id}>
                    <Link href={`/movies-browser/movie/${movie.id}`}>
                      <MovieTile
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                        release_date={movie.release_date}
                        genre_ids={movie.genre_ids}
                      />
                    </Link>
                  </li>
                ))}
              {!!query &&
                filteredMovies?.results?.map((query) => (
                  <li key={query.id}>
                    <Link href={`/movies-browser/movie/${query.id}`}>
                      <MovieTile
                        id={query.id}
                        title={query.title}
                        poster_path={query.poster_path}
                        vote_average={query.vote_average}
                        vote_count={query.vote_count}
                        release_date={query.release_date}
                        genre_ids={query.genre_ids}
                      />
                    </Link>
                  </li>
                ))}
            </GridList>
          </section>
          <Pagination
            total_pages={
              query ? filteredMovies?.total_pages : !popularMovies?.total_pages
            }
          />
        </Container>
      )}
    </Main>
  );
}
