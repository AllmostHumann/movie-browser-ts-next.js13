"use client";
import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { fetchTvShowData } from "@/app/api/hooks/tv/useTvShows";
import { fetchTvShowQuery } from "@/app/api/hooks/queries/useQuery";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";
import { Container } from "@/app/components/Container/Container";
import { Main } from "@/app/components/Main/Main";
import { GridList } from "@/app/components/GridList/GridList";
import { TvShowTile } from "@/app/components/Tiles/TvShowTile/TvShowTile";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { Pagination } from "@/app/components/Pagination/Pagination";
import { ErrorPage } from "@/app/components/Status/Error/Error";
import { LoadingPage } from "@/app/components/Status/Loading/Loading";
import { NoResult } from "@/app/components/Status/NoResult/NoResult";

export default function PopularTvShows() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const [tvShowsList, searchTvShow] = useQueries({
    queries: [
      {
        queryKey: ["tvShowsList", { page }],
        queryFn: () => fetchTvShowData({ page }),
        keepPreviousData: true,
      },
      {
        queryKey: ["searchTvShow", { query, page }],
        queryFn: () => fetchTvShowQuery({ query, page }),
        keepPreviousData: true,
        enabled: !!query,
      },
    ],
  });

  const {
    data: popularTvShows,
    isLoading: tvShowsListLoading,
    error: tvShowsListError,
  } = tvShowsList;
  const {
    data: filteredTvShows,
    isLoading: searchTvShowLoading,
    error: searchTvShowError,
  } = searchTvShow;

  if (tvShowsListLoading && searchTvShowLoading) {
    return <LoadingPage />;
  }

  if (tvShowsListError && searchTvShowError instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <Main
      list={true}
      page={false}
    >
      {query && !filteredTvShows?.total_results ? (
        <NoResult query={query} />
      ) : (
        <Container>
          <section>
            <SectionTitle
              list={true}
              details={false}
            >
              {query
                ? `Search results for "${query}" (${filteredTvShows?.total_results})`
                : "Popular TV Shows"}
            </SectionTitle>
            <GridList
              people={false}
              movies={true}
            >
              {!query &&
                popularTvShows?.results?.map((tvShow) => (
                  <li key={tvShow.id}>
                    <Link href={`/movies-browser/tv/show/${tvShow.id}`}>
                      <TvShowTile
                        id={tvShow.id}
                        name={tvShow.name}
                        poster_path={tvShow.poster_path}
                        vote_average={tvShow.vote_average}
                        vote_count={tvShow.vote_count}
                        first_air_date={tvShow.first_air_date}
                        genre_ids={tvShow.genre_ids}
                      />
                    </Link>
                  </li>
                ))}
              {!!query &&
                filteredTvShows?.results?.map((query) => (
                  <li key={query.id}>
                    <Link href={`/movies-browser/tv/show/${query.id}`}>
                      <TvShowTile
                        id={query.id}
                        name={query.name}
                        poster_path={query.poster_path}
                        vote_average={query.vote_average}
                        vote_count={query.vote_count}
                        first_air_date={query.first_air_date}
                        genre_ids={query.genre_ids}
                      />
                    </Link>
                  </li>
                ))}
            </GridList>
          </section>
          <Pagination
            total_pages={
              query
                ? filteredTvShows?.total_pages
                : !popularTvShows?.total_pages
            }
          />
        </Container>
      )}
    </Main>
  );
}
