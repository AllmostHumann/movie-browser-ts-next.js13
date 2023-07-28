import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/app/components/Container/Container";
import { SectionTitle } from "@/app/components/SectionTitle/SectionTitle";
import { GridList } from "@/app/components/GridList/GridList";
import { PersonTile } from "@/app/components/Tiles/PersonTile/PersonTile";
import { MovieCreditsResponse } from "@/app/api/types/movies/moviesCredits";

export const Crew = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MovieCreditsResponse>([
    "movieCredits",
    { id },
  ]);

  return (
    <Container>
      <section>
        <SectionTitle list={false} details={true}>
          Crew
        </SectionTitle>
        <GridList people={true} movies={false}>
          {data?.crew?.map((crew) => (
            <li key={crew.credit_id}>
              <Link href={`/movies-browser/people/person/${crew.id}`}>
                <PersonTile
                  id={crew.id}
                  profile_path={crew.profile_path}
                  name={crew.name}
                  job={crew.job}
                />
              </Link>
            </li>
          ))}
        </GridList>
      </section>
    </Container>
  );
};
