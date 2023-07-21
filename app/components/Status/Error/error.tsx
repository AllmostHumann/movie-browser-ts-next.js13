"use client";
import Link from "next/link";
import DangerIcon from "@/app/components/Status/images/danger.svg";

export const ErrorPage = () => {
  return (
    <div className="scale-70 md:scale-85 mx-[0] my-[198px] flex flex-col items-center justify-center duration-[0.5s]">
      <DangerIcon className="m-[14px] h-[100px] w-[100px]" />
      <h1 className="text-center text-[36px] font-semibold leading-[120%] text-smoke">
        Ooops! Something went wrong...
      </h1>
      <div className="text-center text-[22px] font-medium leading-[130%] text-smoke">
        Please check your network connection
        <br />
        and try again
      </div>
      <Link
        className="decoration-none mt-[24px] gap-[10px] rounded-[5px] border-none bg-scienceBlue px-[24px] py-[16px] text-[14px] font-bold leading-[19px] text-white hover:cursor-pointer hover:brightness-[110%] active:brightness-[120%]	"
        href="/movies-browser/movies"
      >
        Back to home page
      </Link>
    </div>
  );
};
