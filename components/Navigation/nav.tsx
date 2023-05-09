"use client";

import { Search } from "@/components/Search/search";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const router: string = usePathname();

  interface NavLink {
    name: string;
    link: string;
  }

  const navLink: NavLink[] = [
    {
      name: "MOVIES",
      link: "/movies",
    },
    {
      name: "PEOPLE",
      link: "/people",
    },
  ];

  return (
    <nav>
      <div className="bg-black px-[23px] py-[16px] text-white mobileMax:p-[16px]">
        <div className="m-auto grid max-w-[1368px] grid-cols-[auto,minmax(205px,432px)] gap-[16px] mobileMax:grid-cols-[1fr] mobileMax:gap-[24px]">
          <div className="flex gap-[80px] mobileMax:justify-between mobileMax:gap-[20px]">
            <div className="decoration-none flex items-center gap-[12px] text-white mobileMax:gap-[8px]">
              <svg
                className="h-[40px] w-[40px] shrink-0 mobileMax:h-[17px] mobileMax:w-[17px]"
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
              <div className="shrink-0 text-[24px] font-medium mobileMax:text-[13px]">
                Movies Browser
              </div>
            </div>
            <nav>
              <div className="m-0 flex list-none gap-[16px] p-0 mobileMax:ml-[30px] mobileMax:gap-[12px]">
                {navLink.map(({ link, name }) => (
                  <Link
                    key={name}
                    href={link}
                    className={`${
                      router === link
                        ? "px[13.5px] decoration-none mobileMax:[12px] block rounded-[24px] border-[1px] border-solid border-white bg-none px-[24px] py-[13.5px] text-[14px] font-semibold text-white hover:cursor-pointer mobileMax:px-[12px] mobileMax:py-[8px] mobileMax:text-[12px]"
                        : "px[13.5px] decoration-none mobileMax:[12px] block rounded-[24px] border-[1px] border-none border-white bg-none px-[24px] py-[13.5px] text-[14px] font-semibold text-white hover:cursor-pointer mobileMax:px-[12px] mobileMax:py-[8px] mobileMax:text-[12px]"
                    } `}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};
