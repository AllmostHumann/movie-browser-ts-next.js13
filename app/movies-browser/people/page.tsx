"use client";
import { useQueries } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { fetchPeopleData } from "@/app/api/hooks/people/usePeople";
import { fetchPersonQuery } from "@/app/api/hooks/queries/useQuery";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";
import { LoadingPage } from "@/app/components/Status/loading";
import { ErrorPage } from "@/app/components/Status/error";
import { NoResult } from "@/app/components/Status/noResult";
import { Main } from "@/app/components/Main/main";
import { Container } from "@/app/components/Container/container";
import { SectionTitle } from "@/app/components/SectionTitle/sectionTitle";
import { GridList } from "@/app/components/GridList/gridList";
import { PersonTile } from "@/app/components/Tiles/PersonTile/personTile";
import { Pagination } from "@/app/components/Pagination/pagination";

export default function PopularPeople() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const [peopleList, searchPerson] = useQueries({
    queries: [
      {
        queryKey: ["peopleList", { page }],
        queryFn: () => fetchPeopleData({ page }),
        keepPreviousData: true,
      },
      {
        queryKey: ["searchPerson", { query, page }],
        queryFn: () => fetchPersonQuery({ query, page }),
        keepPreviousData: true,
        enabled: !!query,
      },
    ],
  });

  const {
    data: popularPeople,
    isLoading: moviesListLoading,
    error: moviesListError,
  } = peopleList;
  const {
    data: filteredPersons,
    isLoading: searchMovieLoading,
    error: searchMovieError,
  } = searchPerson;

  if (moviesListLoading && searchMovieLoading) {
    return <LoadingPage />;
  }

  if (moviesListError && searchMovieError instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <Main
      list={true}
      page={false}
    >
      {query && !filteredPersons?.total_results ? (
        <NoResult query={query} />
      ) : (
        <Container>
          <section>
            <SectionTitle
              list={true}
              details={false}
            >
              {query
                ? `Search results for "${query}" (${filteredPersons?.total_results})`
                : "Popular people"}
            </SectionTitle>
            <GridList
              people={true}
              movies={false}
            >
              {!query &&
                popularPeople?.results?.map((person) => (
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
              {!!query &&
                filteredPersons?.results?.map((query) => (
                  <li key={query.id}>
                    <Link href={`/movies-browser/people/person/${query.id}`}>
                      <PersonTile
                        id={query.id}
                        profile_path={query.profile_path}
                        name={query.name}
                      />
                    </Link>
                  </li>
                ))}
            </GridList>
          </section>
          <Pagination
            total_pages={
              query ? filteredPersons?.total_pages : !popularPeople?.total_pages
            }
          />
        </Container>
      )}
    </Main>
  );
}
