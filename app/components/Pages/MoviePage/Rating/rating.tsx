import Image from "next/image";
import StarIcon from "./images/star.svg";
import classNames from "classnames";

export const Rating = ({
  voteAmount,
  averageVotes,
  poster,
  about,
}: {
  voteAmount: number | undefined;
  averageVotes: string | undefined;
  poster: boolean;
  about: boolean;
}) => {
  const container = classNames({
    "flex flex-row items-center gap-[7px] md:flex-col md:items-start md:gap-[16px]":
      poster,
    "flex flex-row items-center gap-[7px] md:gap-[12px]": about,
  });

  const starIcon = classNames({
    "h-[16px] w-auto md:h-[38px] md:w-auto": poster,
    "h-[16px] w-auto md:h-[22px] md:w-auto": about,
  });

  const votesAverage = classNames({
    "text-[14px] font-semibold md:text-[30px] md:font-medium": poster,
    "text-[13px] font-semibold md:text-[22px] md:font-medium": about,
  });

  const votesAmount = classNames({
    "text-[10px] md:text-[16px]": poster,
    "translate-y-[1px] md:translate-y-0 text-[13px] md:text-[14px]": about,
  });

  return (
    <div className={container}>
      <div className="flex items-center gap-[8px]">
        <Image
          src={StarIcon}
          alt="starIcon"
          className={starIcon}
        />
        <div>
          <span className={votesAverage}>{averageVotes}</span>
        </div>
        <span className="hidden md:block md:text-[14px]">/ 10</span>
      </div>
      <span className={votesAmount}>{voteAmount} votes</span>
    </div>
  );
};
