import Image from "next/image";
import { Rating } from "../Rating/rating";
import placeholderImage from "./../../Tiles/MovieTile/images/noMoviePoster.png";
import { MovieDetailsResponse } from "@/app/api/types/movies/moviesDetails";
import { GenresResponse } from "@/app/api/types/genres/genres";
import { apiConfig } from "@/app/api/config/apiRoutes";

export const About = (
  { details }: { details: MovieDetailsResponse | undefined },
  genres: GenresResponse
) => {
  return (
    <div className="grid-y-[16px] mt-[-8px] grid grid-cols-6 justify-center gap-x-[16px] bg-white p-[16px] shadow-[0px_4px_12px_0px#bac7d57f] md:mt-[64px] md:grid-cols-5 md:gap-x-[40px] md:p-[40px]">
      {details?.poster_path ? (
        <Image
          className="w-[100%] rounded-[5px]"
          src={`${apiConfig.posters.endpoint}${details.poster_path}`}
          alt="moviePoster"
          width={0}
          height={0}
          unoptimized
          priority
        />
      ) : (
        <Image
          className="w-[100%] rounded-[5px]"
          src={placeholderImage}
          alt="placeholderImage"
          width={0}
          height={0}
          unoptimized
          priority
        />
      )}
      <div className="mb-0 flex flex-col gap-[8px] justify-self-start md:mb-[24px] md:gap-[24px]">
        <h1
          className="m-0 text-[16px] font-medium leading-[120%] md:text-[36px] md:font-semibold"
          data-as={`${details?.backdrop_path ? "h2" : "h1"}`}
        >
          {details?.title}
        </h1>
        <span className="text-[13px] font-normal leading-[120%] text-stormGrey md:text-[22px]">
          {details?.release_date?.slice(0, 4)}
        </span>
        <div className="flex flex-col gap-[8px] text-[12px] md:text-[18px]">
          {details?.production_countries && (
            <div>
              <span className="hidden md:mr-[10px] md:text-stormGrey">
                Production:
              </span>
              <span className="hidden md:text-[18px]">
                {details?.production_countries[0].name}
              </span>
              <span className="inline md:hidden md:text-[12px]">
                {details?.production_countries[0].iso_3166_1}
              </span>
            </div>
          )}
          <div>
            <span className="hidden md:mr-[10px] md:text-stormGrey">
              Release date:
            </span>
            {details?.release_date?.replaceAll("-", ".")}
          </div>
        </div>
        <div className="gap-[8px] md:flex md:flex-wrap md:gap-[16px]">
          {Object.values(genres).map((genre) => (
            <div
              className="rounded-[5px] bg-mystic px-[8px] py-[4px] text-[10px] md:px-[16px] md:py-[8px] md:text-[14px]"
              key={genre.id}
            >
              {genre.name}
            </div>
          ))}
        </div>
        <Rating poster={false}
          averageVotes={details?.vote_average?.toFixed(1)}
          voteAmount={details?.vote_count}
        />
      </div>
      <p className="col-start-2 row-start-2 m-0 text-[14px] leading-[160%] md:text-[20px]">
        {details?.overview}
      </p>
    </div>
  );
};
