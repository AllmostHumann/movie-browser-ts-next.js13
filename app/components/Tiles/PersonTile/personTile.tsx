import Image from "next/image";
import noPersonPoster from "./images/noPersonPoster.png";
import { apiConfig } from "@/app/api/config/apiRoutes";

interface PersonProps {
  id?: number;
  name?: string;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  job?: string;
}

export const PersonTile = ({
  id,
  profile_path,
  name,
  character,
  job,
}: PersonProps) => {
  return (
    <div
      id={`${id}`}
      className="grid h-full grid-cols-auto grid-rows-1 rounded-[5px] p-[12px] shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-8px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:grid-cols-1 md:p-[16px] sm:grid-cols-2"
    >
      <Image
        src={
          profile_path
            ? `${apiConfig.posters.endpoint}${profile_path}`
            : noPersonPoster
        }
        className="h-[169px] w-[114px] rounded-[5px] object-contain md:h-auto md:w-full"
        width={0}
        height={0}
        alt=""
        unoptimized
        priority
      />
      <div className="my-0 ml-[8px] mr-0 flex flex-col items-center justify-start gap-[4px] md:justify-between md:gap-[8px]">
        {name && (
          <h1 className="mt-[16px] text-[22px] font-medium leading-[1.3] decoration-smoke max-md:my-0 max-md:ml-[8px] max-md:mr-0 max-md:text-[16px]">
            {name}
          </h1>
        )}
        {!!character ? (
          <p className="my-0 ml-[8px] mr-0 text-[18px] font-normal text-waterloo md:m-0">
            {character}
          </p>
        ) : (
          <p className="my-0 ml-[8px] mr-0 text-[18px] font-normal text-waterloo md:m-0">
            {job}
          </p>
        )}
      </div>
    </div>
  );
};
