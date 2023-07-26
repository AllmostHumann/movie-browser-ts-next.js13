import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Rating } from "../Rating/rating";
import { MovieDetailsResponse } from "@/app/api/types/movies/moviesDetails";
import { apiConfig } from "@/app/api/config/apiRoutes";
import useBreakpoint from "@/app/api/hooks/breakpoints/useBreakpoint";
import { Player } from "@/app/components/Player/player";

export const Poster = () => {
  const { id } = useParams();
  const breakpoint = useBreakpoint();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MovieDetailsResponse>([
    "movieDetails",
    { id },
  ]);
  return (
    <>
      <div className="relative flex justify-center bg-black text-white">
        <div className="absolute h-full w-full bg-background-gradient-mobile md:bg-background-gradient-desktop" />
        {breakpoint < 768 && (
          <Image
            src={`${apiConfig.posterW780.endpoint}${data?.backdrop_path}`}
            alt="backgroundImage"
            width={680}
            height={400}
            unoptimized
            priority
          />
        )}
        {breakpoint > 768 && (
          <Image
            src={`${apiConfig.posterW1280.endpoint}${data?.backdrop_path}`}
            alt="backgroundImage"
            width={1280}
            height={720}
            unoptimized
            priority
          />
        )}
        <Player />
        <div className="absolute bottom-[8px] left-[clamp(1rem,_-2.25rem_+_16.25vw,_17.25rem)] grid gap-[6px] md:bottom-[56px] md:gap-[25px]">
          <h1 className="m-0 text-[clamp(1.5rem,_1rem_+_2.5vw,_4rem)] font-semibold leading-[120%]">
            {data?.original_title}
          </h1>
          <Rating
            poster={true}
            about={false}
            averageVotes={data?.vote_average?.toFixed(1)}
            voteAmount={data?.vote_count}
          />
        </div>
      </div>
    </>
  );
};
