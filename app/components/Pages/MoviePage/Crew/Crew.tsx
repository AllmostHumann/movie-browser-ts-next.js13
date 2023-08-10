import { useState } from "react";
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
  const [loadMore, setLoadMore] = useState(false);
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
          {data?.crew?.slice(0, 6).map((crew) => (
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
          {loadMore &&
            data?.crew?.slice(6).map((crew) => (
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
    </Container>
  );
};
