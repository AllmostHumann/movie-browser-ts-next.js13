import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import placeholderImage from "./../../../Tiles/MovieTile/images/noMoviePoster.png";
import { apiConfig } from "@/app/api/config/apiRoutes";
import { PersonDetailsResponse } from "@/app/api/types/people/personDetails";
import useBreakpoint from "@/app/api/hooks/breakpoints/useBreakpoint";

export const About = () => {
  const { id } = useParams();
  const breakpoint = useBreakpoint();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<PersonDetailsResponse>([
    "personDetails",
    { id },
  ]);

  const dayOfBirth = new Date(`${data?.birthday}`);

  return (
    <div className="grid-y-[16px] mt-[16px] grid grid-cols-11 justify-center gap-[16px] bg-white p-[16px] grid-areas-layoutMovie md:mt-[64px] md:grid-cols-10 md:gap-x-[40px] md:p-[40px] md:grid-areas-layoutMovie lg:grid-cols-12 lg:grid-areas-layout ">
      <div className="relative aspect-[2/3] min-h-[169px] overflow-hidden rounded-[5px] grid-in-p">
        {breakpoint < 768 && (
          <Image
            src={
              data?.profile_path
                ? `${apiConfig.posterW154.endpoint}${data?.profile_path}`
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
              data?.profile_path
                ? `${apiConfig.posterW400.endpoint}${data?.profile_path}`
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
        <h1 className="m-0 text-[16px] [word-break:break-word] font-medium leading-[120%] md:text-[36px] md:font-semibold">
          {data?.name}
        </h1>
        <div className="flex flex-col gap-[8px] text-[12px] md:text-[18px]">
          <div className="flex flex-wrap">
            <span className="hidden text-stormGrey md:mr-[10px] md:block">
              Date of birth:
            </span>
            <span className="hidden md:block md:text-[18px]">
              {dayOfBirth.toLocaleDateString("pl-PL")}
            </span>
            <span className="inline md:hidden md:text-[12px]">
              {dayOfBirth.toLocaleDateString("pl-PL")}
            </span>
          </div>
          <div className="flex flex-wrap">
            <span className="hidden text-stormGrey md:mr-[10px] md:block">
              Place of birth:
            </span>
            <span className="hidden md:block md:text-[18px]">
              {data?.place_of_birth}
            </span>
            <span className="inline md:hidden md:text-[12px]">
              {data?.place_of_birth}
            </span>
          </div>
        </div>
      </div>
      <article className="col-start-2 row-start-2 m-0 text-[14px] leading-[160%] grid-in-d md:text-[20px]">
        {data?.biography}
      </article>
    </div>
  );
};
