import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Container } from "@/app/components/Container/container";
import { SectionTitle } from "@/app/components/SectionTitle/sectionTitle";
import { GridList } from "@/app/components/GridList/gridList";
import { PersonTile } from "@/app/components/Tiles/PersonTile/personTile";
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
        <SectionTitle
          list={false}
          details={true}
        >
          Crew
        </SectionTitle>
        <GridList
          people={true}
          movies={false}
        >
          {data?.crew?.map((crew) => (
            <li key={crew.credit_id}>
              <PersonTile
                id={crew.id}
                profile_path={crew.profile_path}
                name={crew.name}
                job={crew.job}
              />
            </li>
          ))}
        </GridList>
      </section>
    </Container>
  );
};
