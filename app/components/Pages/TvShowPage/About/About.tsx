import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import moment from "moment";
import placeholderImage from "./../../../Tiles/MovieTile/images/noMoviePoster.png";
import { Rating } from "../Rating/Rating";
import { TvDetailsResponse } from "@/app/api/types/tv/tvShowsDetails";
import { apiConfig } from "@/app/api/config/apiRoutes";
import useBreakpoint from "@/app/api/hooks/breakpoints/useBreakpoint";

export const About = () => {
  const { id } = useParams();
  const breakpoint = useBreakpoint();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<TvDetailsResponse>([
    "tvShowDetails",
    { id },
  ]);

  return (
    <div className="grid-y-[16px] mt-[16px] grid grid-cols-6 justify-center gap-[16px] bg-white p-[16px] shadow-[0px_4px_12px_0px#bac7d57f] grid-areas-layoutMovie md:mt-[64px] md:grid-cols-5 md:gap-x-[40px] md:p-[40px] md:grid-areas-layout">
      <div className="relative aspect-[2/3] min-h-[169px] overflow-hidden rounded-[5px] grid-in-p">
        {breakpoint < 768 && (
          <Image
            src={
              data?.poster_path
                ? `${apiConfig.posterW342.endpoint}${data?.poster_path}`
                : placeholderImage
            }
            alt="moviePoster"
            unoptimized
            fill
            priority
          />
        )}
        {breakpoint > 768 && (
          <Image
            src={
              data?.poster_path
                ? `${apiConfig.posterW500.endpoint}${data?.poster_path}`
                : placeholderImage
            }
            alt="moviePoster"
            unoptimized
            fill
            priority
          />
        )}
      </div>
      <div className="mb-0 flex flex-col gap-[8px] justify-self-start grid-in-i md:mb-[24px] md:gap-[24px]">
        <h1
          className="m-0 text-[16px] font-medium leading-[120%] md:text-[36px] md:font-semibold"
          data-as={`${data?.backdrop_path ? "h2" : "h1"}`}
        >
          {data?.name}
        </h1>
        <div className="flex flex-col gap-[8px] text-[12px] md:text-[18px]">
          {data?.production_countries && (
            <div className="flex flex-wrap">
              <span className="hidden md:mr-[10px] md:block ">Production:</span>
              <span className="hidden md:block md:text-[18px]">
                {data?.production_countries[0]?.name}
              </span>
              <span className="inline md:hidden md:text-[12px]">
                {data?.production_countries[0]?.iso_3166_1}
              </span>
            </div>
          )}
          <div className="flex flex-col">
            <span className="md:mr-[10px] md:block">
              First air date:{" "}
              {moment(data?.first_air_date).format("DD.MM.YYYY")}
            </span>
            <span className="md:mr-[10px] md:block">
              Last air date: {moment(data?.last_air_date).format("DD.MM.YYYY")}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-[8px] md:gap-[16px]">
          {data?.genres?.map((genre) => (
            <div
              className="rounded-[5px] bg-mystic px-[8px] py-[4px] text-[10px] md:px-[16px] md:py-[8px] md:text-[14px]"
              key={genre.id}
            >
              {genre.name}
            </div>
          ))}
        </div>
        <Rating
          about={true}
          poster={false}
          averageVotes={data?.vote_average?.toFixed(1)}
          voteAmount={data?.vote_count}
        />
      </div>
      <p className="col-start-2 row-start-2 m-0 text-[14px] leading-[160%] grid-in-d md:text-[20px]">
        {data?.overview}
      </p>
    </div>
  );
};
