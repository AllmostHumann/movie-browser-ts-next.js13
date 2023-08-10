import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { searchQueryParamName } from "@/app/api/hooks/queries/useQueryParameter";
import { fetchMultiQuery } from "@/app/api/hooks/queries/useMultiQuery";
import { TvShowTile } from "../TvShowTile/TvShowTile";
import { MovieTile } from "../MovieTile/MovieTile";
import { PersonTile } from "../PersonTile/PersonTile";
import { LoadingPage } from "../../Status/Loading/Loading";
import { ErrorPage } from "../../Status/Error/Error";
import { GridList } from "../../GridList/GridList";
import { Pagination } from "../../Pagination/Pagination";
import { SectionTitle } from "../../SectionTitle/SectionTitle";
import { NoResult } from "../../Status/NoResult/NoResult";
import { Container } from "../../Container/Container";

export const SearchTile = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get(searchQueryParamName) || null;

  const { data, error, isLoading } = useQuery({
    queryKey: ["multiQuerySearch", { query, page }],
    queryFn: () => fetchMultiQuery({ query, page }),
    enabled: !!query,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error instanceof Error) {
    return <ErrorPage />;
  }

  return (
    <>
      {query && !data?.total_results ? (
        <NoResult query={query} />
      ) : (
        <Container>
          <section>
            <SectionTitle
              list={true}
              details={false}
            >
              {query
                ? `Search results for "${query}" (${data?.total_results})`
                : "Popular movies"}
            </SectionTitle>
            <GridList
              people={true}
              movies={false}
            >
              {data?.results?.map(
                (person) =>
                  person.profile_path && (
                    <li key={person.id}>
                      <Link href={`/movies-browser/people/person/${person.id}`}>
                        <PersonTile
                          id={person.id}
                          profile_path={person.profile_path}
                          name={person.name}
                        />
                      </Link>
                    </li>
                  )
              )}
            </GridList>
            <GridList
              people={false}
              movies={true}
            >
              {data?.results?.map(
                (movie) =>
                  movie.title && (
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
                  )
              )}
              {data?.results?.map(
                (show) =>
                  show.first_air_date && (
                    <li key={show.id}>
                      <Link href={`/movies-browser/tv/show/${show.id}`}>
                        <TvShowTile
                          id={show.id}
                          name={show.name}
                          poster_path={show.poster_path}
                          vote_average={show.vote_average}
                          vote_count={show.vote_count}
                          first_air_date={show.first_air_date}
                          genre_ids={show.genre_ids}
                        />
                      </Link>
                    </li>
                  )
              )}
            </GridList>
            <Pagination total_pages={data?.total_pages} />
          </section>
        </Container>
      )}
    </>
  );
};
