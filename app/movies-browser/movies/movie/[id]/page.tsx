"use client";

import { useQueries } from "@tanstack/react-query";
import { Main } from "@/app/components/Main/main";
import { Container } from "@/app/components/Container/container";
import { About } from "@/app/components/MoviePage/About/about";
import { Cast } from "@/app/components/MoviePage/Cast/cast";
import { Crew } from "@/app/components/MoviePage/Crew/crew";
import { Poster } from "@/app/components/MoviePage/Poster/poster";
import { fetchMovieDetails } from "@/app/api/hooks/movies/useMovieDetails";
import { fetchMovieCredits } from "@/app/api/hooks/movies/useMovieCredits";
import { LoadingPage } from "@/app/components/Status/Loading/loading";
import { ErrorPage } from "@/app/components/Status/Error/error";
import { useParams } from "next/navigation";

export default function MovieDetails() {
  const { id } = useParams();

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

  const {
    data: details,
    isLoading: detailsLoading,
    error: detailsError,
  } = movieDetails;
  const {
    data: credits,
    isLoading: creditsLoading,
    error: creditsError,
  } = movieCredits;

  if (detailsLoading && creditsLoading) {
    return <LoadingPage />;
  }

  if (detailsError && creditsError instanceof Error) {
    return <ErrorPage />;
  }

  console.log(details);

  return (
    <>
      <Poster details={details} />
      <Main
        moviesList={false}
        moviePage={true}
      >
        <Container>
          <About details={details} />
          <Cast credits={credits?.cast} />
          <Crew credits={credits?.crew} />
        </Container>
      </Main>
    </>
  );
}
