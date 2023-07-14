import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/app/components/Container/container";
import { SectionTitle } from "@/app/components/SectionTitle/sectionTitle";
import { GridList } from "@/app/components/GridList/gridList";
import { PersonTile } from "@/app/components/Tiles/PersonTile/personTile";
import { MovieCreditsResponse } from "@/app/api/types/movies/moviesCredits";

export const Cast = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MovieCreditsResponse>([
    "movieCredits",
    { id },
  ]);

  return (
    <Container>
      <section>
        <SectionTitle
          list={false}
          details={true}
        >
          Cast
        </SectionTitle>

        <GridList
          people={true}
          movies={false}
        >
          {data?.cast?.map((cast) => (
            <li key={cast.cast_id}>
              <Link href={`/movies-browser/people/person/${cast.id}`}>
                <PersonTile
                  id={cast.id}
                  profile_path={cast.profile_path}
                  name={cast.name}
                  character={cast.character}
                />
              </Link>
            </li>
          ))}
        </GridList>
      </section>
    </Container>
  );
};
