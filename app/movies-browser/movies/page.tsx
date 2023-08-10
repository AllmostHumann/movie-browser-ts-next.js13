"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { fetchMoviesData } from "@/app/api/hooks/movies/useMovies";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";
import { Container } from "@/app/components/Container/Container";
import { Main } from "@/app/components/Main/Main";
import { GridList } from "@/app/components/GridList/GridList";
import { MovieTile } from "@/app/components/Tiles/MovieTile/MovieTile";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { ErrorPage } from "@/app/components/Status/Error/Error";
import { LoadingPage } from "@/app/components/Status/Loading/Loading";
import { NoResult } from "@/app/components/Status/NoResult/NoResult";
import { SearchTile } from "@/app/components/Tiles/SearchTile/SearchTile";

export default function PopularMovies() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["moviesList", { page }],
    queryFn: () => fetchMoviesData({ page }),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <Main
      list={true}
      page={false}
    >
      <Container>
        {!query ? (
          <section>
            <SectionTitle
              list={true}
              details={false}
            >
              Popular movies
            </SectionTitle>
            <GridList
              people={false}
              movies={true}
            >
              {data?.results?.map((movie) => (
                <li key={movie.id}>
                  <Link href={`/movies-browser/movies/movie/${movie.id}`}>
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
            </GridList>
          </section>
        ) : (
          <SearchTile />
        )}
        {!query && <Pagination total_pages={data?.total_pages} />}
      </Container>
    </Main>
  );
}
