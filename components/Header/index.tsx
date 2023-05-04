"use client";
import { Search } from "@/components/Search";

export const Header = () => {
  return (
    <header>
      <div className="px-[23px] py-[16px] bg-black text-white mobileMax:p-[16px]">
        <div className="max-w-[1368px] m-auto grid gap-[16px] grid-cols-[auto,minmax(205px,432px)] mobileMax:grid-cols-[1fr] mobileMax:gap-[24px]">
          <div className="flex gap-[80px] mobileMax:justify-between mobileMax:gap-[20px]">
            <div className="decoration-none text-white flex gap-[12px] items-center mobileMax:gap-[8px]">
              <svg
                className="shrink-0 w-[40px] h-[40px] mobileMax:w-[17px] mobileMax:h-[17px]"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8774 24.9939L32.9858 27.4906C34.1458 27.9639 35.4158 27.1122 35.4158 25.8589V14.7939C35.4158 13.5406 34.1458 12.6872 32.9858 13.1606L26.8774 15.6572"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5068 31.9014H20.9552C24.5952 31.9014 26.8785 29.5297 26.8785 26.1714V14.4797C26.8785 11.1214 24.6052 8.74969 20.9552 8.74969H10.5068C6.85516 8.74969 4.5835 11.1214 4.5835 14.4797V26.1714C4.5835 29.5297 6.85516 31.9014 10.5068 31.9014Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="font-medium text-[24px] shrink-0 mobileMax:text-[13px]">
                Movies Browser
              </div>
            </div>
            <nav>
              <div className="flex gap-[16px] p-0 m-0 list-none mobileMax:gap-[12px] mobileMax:ml-[30px]">
                <li>
                  <div className="block text-white bg-none border-none rounded-[24px] text-[14px] font-semibold px[13.5px] py-[24px] decoration-none active:border-white hover:cursor-pointer mobileMax:text-[12px] mobileMax:px-[8px] mobileMax:[12px]">
                    MOVIES
                  </div>
                </li>
                <li>
                  <div className="block text-white bg-none border-none rounded-[24px] text-[14px] font-semibold px[13.5px] py-[24px] decoration-none active:border-white hover:cursor-pointer mobileMax:text-[12px] mobileMax:px-[8px] mobileMax:[12px]">
                    PEOPLE
                  </div>
                </li>
              </div>
            </nav>
          </div>
          <Search />
        </div>
      </div>
    </header>
  );
};
