import Link from "next/link";
import Image from "next/image";
import Icon from "./images/moviesIcon.svg";
import { Search } from "../Search";
import { Navigation } from "../Navigation";

export const Header = () => {
  return (
    <header>
      <div className="bg-black px-[23px] py-[16px] text-white mobileMax:p-[16px]">
        <div className="m-auto grid max-w-[1368px] grid-cols-[auto,minmax(205px,432px)] gap-[16px] mobileMax:grid-cols-[1fr] mobileMax:gap-[24px]">
          <div className="flex gap-[80px] mobileMax:justify-between mobileMax:gap-[20px]">
            <Link
              href="/movies"
              className="decoration-none flex items-center gap-[12px] text-white mobileMax:gap-[8px]"
            >
              <Image
                src={Icon}
                alt="icon"
              />
              <p className="shrink-0 text-[24px] font-medium mobileMax:text-[13px]">
                Movies Browser
              </p>
            </Link>
            <Navigation />
          </div>
          <Search />
        </div>
      </div>
    </header>
  );
};
