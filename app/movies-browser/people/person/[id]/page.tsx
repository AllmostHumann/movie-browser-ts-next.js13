"use client";
import { useQueries } from "@tanstack/react-query";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";
import { fetchPersonDetails } from "@/app/api/hooks/people/usePersonDetails";
import { fetchPersonCredits } from "@/app/api/hooks/people/usePersonCredits";
import { Main } from "@/app/components/Main/Main";
import { Container } from "@/app/components/Container/Container";
import { About } from "@/app/components/Pages/PersonPage/About/About";
import { Cast } from "@/app/components/Pages/PersonPage/Cast/Cast";
import { Crew } from "@/app/components/Pages/PersonPage/Crew/Crew";
import { LoadingPage } from "@/app/components/Status/Loading/Loading";
import { ErrorPage } from "@/app/components/Status/Error/Error";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";

export default function PersonDetails() {
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

  const [personDetails, personCredits] = useQueries({
    queries: [
      {
        queryKey: ["personDetails", { id }],
        queryFn: () => fetchPersonDetails({ id }),
        keepPreviousData: true,
      },
      {
        queryKey: ["personCredits", { id }],
        queryFn: () => fetchPersonCredits({ id }),
        keepPreviousData: true,
      },
    ],
  });

  const { isLoading: detailsLoading, error: detailsError } = personDetails;
  const { isLoading: creditsLoading, error: creditsError } = personCredits;

  if (detailsLoading && creditsLoading) {
    return <LoadingPage />;
  }

  if (detailsError && creditsError instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <>
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
