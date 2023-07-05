import { Container } from "../../Container/container";
import { SectionTitle } from "../../SectionTitle/sectionTitle";
import { GridList } from "../../GridList/gridList";
import { PersonTile } from "../../Tiles/PersonTile/personTile";
import { CrewMember } from "@/app/api/types/movies/moviesCredits";

export const Crew = ({ credits }: { credits: CrewMember[] | undefined }) => {
  return (
    <Container>
      <section>
        <SectionTitle
          list={false}
          movieDetails={true}
        >
          Crew
        </SectionTitle>
        {credits && credits.length > 0 && (
          <GridList
            people={true}
            movies={false}
          >
            {credits?.map((crew) => (
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
        )}
      </section>
    </Container>
  );
};
