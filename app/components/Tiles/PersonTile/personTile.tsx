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
      className="h-[100%] rounded-[5px] p-[8px] text-center shadow-[0px_4px_12px_0px#bac7d57f] transition-all duration-[170ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] hover:translate-y-[-8px] hover:cursor-pointer hover:shadow-[0px_8px_20px_5px_#A1BAE2] active:translate-y-[-8px] md:p-[16px]"
    >
      <Image
        src={
          profile_path
            ? `${apiConfig.posters.endpoint}${profile_path}`
            : noPersonPoster
        }
        className="aspect-[3/4] h-auto w-[100%] rounded-[5px] object-contain md:w-full"
        width={114}
        height={169}
        alt="personPoster"
        priority
      />
      <p className="mt-[8px] break-words text-center text-[14px] font-medium md:mt-[12px] md:text-[22px]">
        {name}
      </p>
      <p className="mt-[8px] text-center text-[13px] text-waterloo md:text-[18px]">
        {job}
        {character}
      </p>
    </div>
  );
};
