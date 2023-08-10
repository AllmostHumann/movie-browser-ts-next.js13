import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/app/components/Container/Container";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { GridList } from "@/app/components/GridList/GridList";
import { PersonCreditsResponse } from "@/app/api/types/people/personCredits";
import { MovieTile } from "@/app/components/Tiles/MovieTile/MovieTile";

export const Crew = () => {
  const { id } = useParams();
  const [loadMore, setLoadMore] = useState(false);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<PersonCreditsResponse>([
    "personCredits",
    { id },
  ]);

  return (
    <Container>
      {data?.crew && data.crew.length > 0 && (
        <section>
          <SectionTitle
            list={false}
            details={true}
          >
            Movies - crew ({data.crew.length})
          </SectionTitle>
          <GridList
            movies={true}
            people={false}
          >
            {data?.crew?.slice(0, 4).map((movie) => (
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
            {loadMore &&
              data?.crew?.slice(4).map((movie) => (
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
          {!loadMore ? (
            <button
              className="h-full w-full rounded-[5px] mt-[15px] p-[8px] text-center shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-5px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:p-[16px] font-semibold bg-white"
              onClick={() => setLoadMore(true)}
            >
              Show more
            </button>
          ) : (
            <button
              className="h-full w-full rounded-[5px] mt-[15px] p-[8px] text-center shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-5px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:p-[16px] font-semibold bg-white"
              onClick={() => setLoadMore(false)}
            >
              Show less
            </button>
          )}
        </section>
      )}
    </Container>
  );
};
