import Image from "next/image";
import noMoviePoster from "./images/noMoviePoster.png";
import Star from "./images/star.svg";
import { Genres } from "../../Genres/genres";
import { apiConfig } from "@/app/api/config/apiRoutes";
import { MoviesListResult } from "../../../api/types/movies/movies";

export const MovieTile = (movie: MoviesListResult) => {
  return (
    <div
      key={movie.id}
      id={`${movie.id}`}
      className="grid h-full grid-cols-auto grid-rows-1 rounded-[5px] p-[12px] shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-8px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:grid-cols-1 md:p-[16px]"
    >
      <Image
        src={
          movie.poster_path
            ? `${apiConfig.posters.endpoint}${movie.poster_path}`
            : noMoviePoster
        }
        className="h-[169px] w-[114px] rounded-[5px] object-contain md:h-auto md:w-full"
        width={0}
        height={0}
        alt=""
        unoptimized
        priority
      />
      <div className="my-0 ml-[8px] mr-0 flex flex-col items-start justify-start gap-[4px] md:justify-between md:gap-[8px]">
        {movie.title && (
          <h1 className="mt-[16px] text-[22px] font-medium leading-[1.3] decoration-smoke max-md:my-0 max-md:ml-[8px] max-md:mr-0 max-md:text-[16px]">
            {movie.title}
          </h1>
        )}
        {movie.relase_date && (
          <p className="my-0 ml-[8px] mr-0 text-[18px] font-normal text-waterloo md:m-0">
            {new Date(movie.relase_date).getFullYear()}
          </p>
        )}
        {movie.genre_ids && <Genres genre_ids={movie.genre_ids} />}
        {movie.vote_average && movie.vote_count ? (
          <div className="flex items-center px-[8px] py-0">
            <Image
              className="h-[16px] w-[16px] md:h-[21px] md:w-[24px]"
              src={Star}
              alt="star"
              width={24}
              height={21}
            />
            <span className="my-0 ml-[10px] mr-0 text-[13px] font-semibold leading-[130%] text-smoke md:text-[16px] md:leading-[150%]">
              {movie.vote_average}
            </span>
            <span className="my-0 ml-[10px] mr-0 text-[13px] leading-[130%] decoration-waterloo md:text-[16px] md:leading-[150%]">
              {movie.vote_count} votes
            </span>
          </div>
        ) : (
          <Image
            className="h-[16px] w-[16px] md:h-[21px] md:w-[24px]"
            src={Star}
            alt="star"
            width={24}
            height={21}
          />
        )}
      </div>
    </div>
  );
};
