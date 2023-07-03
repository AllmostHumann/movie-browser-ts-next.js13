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
          <div className="absolute h-[100%] w-[100%] bg-background-gradient-mobile md:bg-background-gradient-desktop" />
          <Image
            src={`${apiConfig.posters.endpoint}${details?.backdrop_path}`}
            alt="backgroundImage"
            width={1368}
            height={770}
            priority
          />
          <div className="left absolute bottom-[8px] left-[clamp(16px,_-36px_+_16.25vw,_276px)]  grid gap-[6px] md:bottom-[56px] md:gap-[25px]">
            <h1 className="m-0 text-[24px] font-semibold leading-[120%]">
              {details?.original_title}
            </h1>
            <Rating
              poster={true}
              averageVotes={details?.vote_average?.toFixed(1)}
              voteAmount={details?.vote_count}
            />
          </div>
        </div>
      )}
    </>
  );
};
