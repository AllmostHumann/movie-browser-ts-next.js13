"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { fetchTvShowData } from "@/app/api/hooks/tv/useTvShows";
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
import { SearchTile } from "@/app/components/Tiles/SearchTile/SearchTile";

export default function PopularTvShows() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["tvShowsList", { page }],
    queryFn: () => fetchTvShowData({ page }),
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
              {query
                ? `Search results for "${query}" (${data?.total_results})`
                : "Popular TV Shows"}
            </SectionTitle>
            <GridList
              people={false}
              movies={true}
            >
              {data?.results?.map((tvShow) => (
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
