import Image from "next/image";
import noMoviePoster from "./images/noMoviePoster.png";
import Star from "./images/star.svg";
import { Genres } from "../../Genres/Genres";
import { apiConfig } from "@/app/api/config/apiRoutes";
import { MoviesListResult } from "@/app/api/types/movies/popularMovies";
import useBreakpoint from "../../../api/hooks/breakpoints/useBreakpoint";

export const MovieTile = ({
  id,
  title,
  poster_path,
  release_date,
  genre_ids,
  vote_count,
  vote_average,
}: MoviesListResult) => {
  const breakpoint = useBreakpoint();

  return (
    <div
      key={id}
      id={`${id}`}
      className="grid h-full grid-cols-auto grid-rows-1 rounded-[5px] p-[12px] shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-8px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:grid-cols-1 md:p-[16px] bg-white"
    >
      <div className="relative aspect-[2/3] min-h-[169px] overflow-hidden rounded-[5px]">
        {breakpoint < 768 && (
          <Image
            src={
              poster_path
                ? `${apiConfig.posterW342.endpoint}${poster_path}`
                : noMoviePoster
            }
            alt="moviePoster"
            fill
            unoptimized
            priority
          />
        )}
        {breakpoint > 768 && (
          <Image
            src={
              poster_path
                ? `${apiConfig.posterW500.endpoint}${poster_path}`
                : noMoviePoster
            }
            alt="moviePoster"
            fill
            unoptimized
            priority
          />
        )}
      </div>
      <div className="my-0 ml-[8px] mr-0 flex flex-col items-start justify-start gap-[8px] md:justify-between">
        {title && (
          <h1 className="mt-[16px] text-[22px] font-medium leading-[1.3] text-smoke max-md:my-0 max-md:ml-[8px] max-md:mr-0 max-md:text-[16px]">
            {title}
          </h1>
        )}
        {release_date && (
          <p className="my-0 ml-[8px] mr-0 text-[18px] font-normal text-waterloo md:m-0">
            {new Date(release_date).getFullYear()}
          </p>
        )}
        {genre_ids && <Genres genre_ids={genre_ids} />}
        {vote_average && vote_count ? (
          <div className="flex items-center px-[8px] py-0 mt-auto">
            <Star className="h-[16px] w-[16px] md:h-[21px] md:w-[21px] translate-y-[-3px]" />
            <span className="my-0 ml-[10px] mr-0 text-[13px] font-semibold leading-[130%] text-smoke md:text-[16px] md:leading-[150%] ">
              {vote_average}
            </span>
            <span className="my-0 ml-[10px] mr-0 text-[13px] leading-[130%] text-waterloo md:text-[16px] md:leading-[150%]">
              {vote_count} votes
            </span>
          </div>
        ) : (
          <span className="my-0 ml-[10px] mr-0 text-[13px] leading-[130%] text-waterloo md:text-[16px] md:leading-[150%]">
            No votes yet
          </span>
        )}
      </div>
    </div>
  );
};
