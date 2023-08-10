"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { fetchPeopleData } from "@/app/api/hooks/people/usePeople";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";
import { LoadingPage } from "@/app/components/Status/Loading/Loading";
import { ErrorPage } from "@/app/components/Status/Error/Error";
import { NoResult } from "@/app/components/Status/NoResult/NoResult";
import { Main } from "@/app/components/Main/Main";
import { Container } from "@/app/components/Container/Container";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { GridList } from "@/app/components/GridList/GridList";
import { PersonTile } from "@/app/components/Tiles/PersonTile/PersonTile";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { SearchTile } from "@/app/components/Tiles/SearchTile/SearchTile";

export default function PopularPeople() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["peopleList", { page }],
    queryFn: () => fetchPeopleData({ page }),
    keepPreviousData: true,
    enabled: !query,
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
              {query
                ? `Search results for "${query}" (${data?.total_results})`
                : "Popular people"}
            </SectionTitle>
            <GridList
              people={true}
              movies={false}
            >
              {data?.results?.map((person) => (
                <li key={person.id}>
                  <Link href={`/movies-browser/people/person/${person.id}`}>
                    <PersonTile
                      id={person.id}
                      profile_path={person.profile_path}
                      name={person.name}
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
