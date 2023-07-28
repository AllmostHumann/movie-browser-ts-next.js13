import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/app/components/Container/Container";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { GridList } from "@/app/components/GridList/GridList";
import { PersonCreditsResponse } from "@/app/api/types/people/personCredits";
import { MovieTile } from "@/app/components/Tiles/MovieTile/MovieTile";

export const Cast = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<PersonCreditsResponse>([
    "personCredits",
    { id },
  ]);

  return (
    <Container>
      {data?.cast && data.cast.length > 0 && (
        <section>
          <SectionTitle list={false} details={true}>
            Movies - cast ({data.cast.length})
          </SectionTitle>
          <GridList movies={true} people={false}>
            {data?.cast?.map((movie) => (
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
        </section>
      )}
    </Container>
  );
};