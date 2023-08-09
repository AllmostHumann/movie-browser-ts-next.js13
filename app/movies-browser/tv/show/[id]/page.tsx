"use client";
import { useQueries } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";
import { fetchTvShowDetails } from "@/app/api/hooks/tv/useTvShowsDetails";
import { fetchTvShowCredits } from "@/app/api/hooks/tv/useTvShowsCredits";
import { Main } from "@/app/components/Main/Main";
import { Container } from "@/app/components/Container/Container";
import { About } from "@/app/components/Pages/TvShowPage/About/About";
import { Cast } from "@/app/components/Pages/TvShowPage/Cast/Cast";
import { Crew } from "@/app/components/Pages/TvShowPage/Crew/Crew";
import { Poster } from "@/app/components/Pages/TvShowPage/Poster/Poster";
import { LoadingPage } from "@/app/components/Status/Loading/Loading";
import { ErrorPage } from "@/app/components/Status/Error/Error";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";

export default function TvShowDetails() {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get(searchQueryParamName) || null;

  useEffect(() => {
    if (query) {
      router.replace(
        `/movies-browser/tv?` +
          qs.stringify(
            { [searchQueryParamName]: query, page: 1 },
            { skipNulls: true }
          )
      );
    }
  }, [query, router]);

  const [tvShowDetails, tvShowCredits] = useQueries({
    queries: [
      {
        queryKey: ["tvShowDetails", { id }],
        queryFn: () => fetchTvShowDetails({ id }),
        keepPreviousData: true,
      },
      {
        queryKey: ["tvShowCredits", { id }],
        queryFn: () => fetchTvShowCredits({ id }),
        keepPreviousData: true,
      },
    ],
  });

  const { isLoading: detailsLoading, error: detailsError } = tvShowDetails;
  const { isLoading: creditsLoading, error: creditsError } = tvShowCredits;

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
