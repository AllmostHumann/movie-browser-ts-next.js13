import Image from "next/image";
import noMoviePoster from "./images/noMoviePoster.png";
import noPersonPoster from "./images/noPersonPoster.png";
import Star from "./images/star.svg";
import { Genres } from "../Genres";
import { apiConfig } from "@/app/api/config/apiRoutes";
import { MoviesListResult } from "../../api/types/movies/movies";

export const Tile = (movie: MoviesListResult) => {
  return (
    <div
      key={movie.id}
      id={`${movie.id}`}
      className="grid h-full grid-rows-1 rounded-[5px] p-[16px] shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-8px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:grid-cols-1 md:p-[12px]"
    >
      <Image
        src={
          movie.poster_path
            ? `${apiConfig.posters.endpoint}${movie.poster_path}`
            : noMoviePoster
        }
        className="h-auto w-full flex rounded-[5px] object-contain md:h-[169px] md:w-[114px]"
        width={0}
        height={0}
        alt=""
        unoptimized
        priority
      />

      <div className="flex flex-col items-start justify-between gap-[8px] md:my-0 md:ml-[8px] md:mr-0 md:justify-start md:gap-[4px]">
        {movie.title && (
          <h1 className="mt-[16px] text-[22px] font-medium leading-[1.3] decoration-smoke md:my-0 md:ml-[8px] md:mr-0 md:text-[16px]">
            {movie.title}
          </h1>
        )}
        {movie.relase_date && (
          <p className="m-0 text-[18px] font-normal text-waterloo md:my-0 md:ml-[8px] md:mr-0">
            {new Date(movie.relase_date).getFullYear()}
          </p>
        )}
        {movie.genre_ids && <Genres genre_ids={movie.genre_ids} />}
        {movie.vote_average && movie.vote_count ? (
          <div className="flex items-center px-[8px] py-0">
            <Image
              className="h-[21px] w-[24px] md:h-[16px] md:w-[16px]"
              src={Star}
              alt="star"
              width={24}
              height={21}
            />
            <span className="my-0 ml-[10px] mr-0 text-[16px] font-semibold leading-[150%] text-smoke md:my-0 md:ml-[10px] md:mr-0 md:text-[13px] md:leading-[130%]">
              {movie.vote_average}
            </span>
            <span className=" my-0 ml-[10px] mr-0 text-[16px] leading-[150%] decoration-waterloo md:my-0 md:ml-[10px] md:mr-0 md:text-[13px] md:leading-[130%]">
              {movie.vote_count} votes
            </span>
          </div>
        ) : (
          <Image
            className="h-[21px] w-[24px] md:h-[16px] md:w-[16px]"
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
