import { Container } from "../../Container/container";
import { SectionTitle } from "../../SectionTitle/sectionTitle";
import { GridList } from "../../GridList/gridList";
import { PersonTile } from "../../Tiles/PersonTile/personTile";
import { CastMember } from "../../../api/types/movies/moviesCredits";

export const Cast = ({ credits }: { credits: CastMember[] | undefined }) => {
  return (
    <Container>
      <section>
        <SectionTitle>Cast</SectionTitle>
        {credits && credits.length > 0 && (
          <GridList credits={true}>
            {credits?.map((cast) => (
              <li key={cast.cast_id}>
                <PersonTile
                  id={cast.id}
                  profile_path={cast.profile_path}
                  name={cast.name}
                  character={cast.character}
                />
              </li>
            ))}
          </GridList>
        )}
      </section>
    </Container>
  );
};
