import Image from "next/image";
import StarIcon from "./images/star.svg";

export const Rating = ({
  voteAmount,
  averageVotes,
  poster,
}: {
  voteAmount: number | undefined;
  averageVotes: string | undefined;
  poster: boolean;
}) => {
  return (
    <div
      className={`${
        !!poster
          ? "flex flex-row items-center gap-[7px] md:flex-col md:items-start md:gap-[16px] "
          : "flex flex-row items-center gap-[7px] md:gap-[12px]"
      }`}
    >
      <div className="flex items-center gap-[8px]">
        <Image
          src={StarIcon}
          alt="starIcon"
          className={`${
            !!poster
              ? "h-[16px] w-[16px] md:h-[38px] md:w-[40px]"
              : "h-[16px] w-[16px] md:h-[22px] md:w-[24px]"
          }`}
        />
        <div>
          <span
            className={`${
              !!poster
                ? "text-[14px] font-semibold md:text-[30px] md:font-medium"
                : "text-[13px] font-semibold md:text-[22px] md:font-medium"
            }`}
          >
            {averageVotes}
          </span>
        </div>
        <span className="hidden md:text-[14px]">/ 10</span>
      </div>
      <span
        className={`${
          !!poster
            ? "text-[10px] text-white md:text-[16px]"
            : "text-[13px] text-stormGrey md:text-[14px]"
        }`}
      >
        {voteAmount} votes
      </span>
    </div>
  );
};
