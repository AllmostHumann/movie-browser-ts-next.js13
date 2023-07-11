import Image from "next/image";
import { Rating } from "../Rating/rating";
import { MovieDetailsResponse } from "@/app/api/types/movies/moviesDetails";
import { apiConfig } from "@/app/api/config/apiRoutes";

export const Poster = ({
  details,
}: {
  details: MovieDetailsResponse | undefined;
}) => {
  return (
    <>
      {details?.backdrop_path && (
        <div className="relative flex justify-center bg-black text-white">
          <div className="absolute h-full w-full bg-background-gradient-mobile md:bg-background-gradient-desktop" />
          <Image
            src={`${apiConfig.posters.endpoint}${details?.backdrop_path}`}
            alt="backgroundImage"
            width={1280}
            height={720}
            priority
          />
          <div className="left absolute bottom-[8px] left-[clamp(1rem,_-2.25rem_+_16.25vw,_17.25rem)] grid gap-[6px] md:bottom-[56px] md:gap-[25px]">
            <h1 className="m-0 text-[clamp(1.5rem,_1rem_+_2.5vw,_4rem)] font-semibold leading-[120%]">
              {details?.original_title}
            </h1>
            <Rating
              poster={true}
              about={false}
              averageVotes={details?.vote_average?.toFixed(1)}
              voteAmount={details?.vote_count}
            />
          </div>
        </div>
      )}
    </>
  );
};
