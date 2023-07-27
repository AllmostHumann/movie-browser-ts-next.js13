"use client";
import { useQueries } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";
import { fetchMovieDetails } from "@/app/api/hooks/movies/useMovieDetails";
import { fetchMovieCredits } from "@/app/api/hooks/movies/useMovieCredits";
import { Main } from "@/app/components/Main/Main";
import { Container } from "@/app/components/Container/Container";
import { About } from "@/app/components/Pages/MoviePage/About/About";
import { Cast } from "@/app/components/Pages/MoviePage/Cast/Cast";
import { Crew } from "@/app/components/Pages/MoviePage/Crew/Crew";
import { Poster } from "@/app/components/Pages/MoviePage/Poster/Poster";
import { LoadingPage } from "@/app/components/Status/Loading/Loading";
import { ErrorPage } from "@/app/components/Status/Error/Error";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";

export default function MovieDetails() {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get(searchQueryParamName) || null;

  useEffect(() => {
    if (query) {
      router.replace(
        `/movies-browser/movies?` +
          qs.stringify(
            { [searchQueryParamName]: query, page: 1 },
            { skipNulls: true }
          )
      );
    }
  }, [query, router]);

  const [movieDetails, movieCredits] = useQueries({
    queries: [
      {
        queryKey: ["movieDetails", { id }],
        queryFn: () => fetchMovieDetails({ id }),
        keepPreviousData: true,
      },
      {
        queryKey: ["movieCredits", { id }],
        queryFn: () => fetchMovieCredits({ id }),
        keepPreviousData: true,
      },
    ],
  });

  const { isLoading: detailsLoading, error: detailsError } = movieDetails;
  const { isLoading: creditsLoading, error: creditsError } = movieCredits;

  if (detailsLoading && creditsLoading) {
    return <LoadingPage />;
  }

  if (detailsError && creditsError instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <>
      <Poster />
      <Main
        list={false}
        page={true}
      >
        <Container>
          <About />
          <Cast />
          <Crew />
        </Container>
      </Main>
    </>
  );
}
