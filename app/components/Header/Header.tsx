import Link from "next/link";
import { Search } from "@/app/components/Search/Search";
import { Navigation } from "@/app/components/Navigation/Navigation";
import Icon from "./images/moviesIcon.svg";

export const Header = () => {
  return (
    <header className="m-auto bg-black p-[16px] md:px-[16px] md:py-[23px]">
      <div className="m-auto grid max-w-[1368px] grid-cols-1 gap-[24px] md:grid-cols-9 md:gap-[16px]">
        <div className="flex justify-between gap-[20px] md:justify-start md:gap-[80px]">
          <Link
            href="/movies-browser/movies"
            className="decoration-none flex items-center gap-[8px] text-white md:gap-[12px]"
          >
            <Icon className="translate-y-[-1px] h-[17px] w-[17px] shrink-0 md:h-[40px] md:w-[40px]" />
            <p className="shrink-0 text-[13px] font-medium md:text-[24px]">
              Movies Browser
            </p>
          </Link>
          <Navigation />
        </div>
        <Search />
      </div>
    </header>
  );
};
