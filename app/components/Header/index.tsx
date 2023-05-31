import Link from "next/link";
import Image from "next/image";
import Icon from "./images/moviesIcon.svg";
import { Search } from "@/app/components/Search";
import { Navigation } from "@/app/components/Navigation";

export const Header = () => {
  return (
    <header className="m-auto bg-black px-[16px] py-[23px] text-white max-md:p-[16px]">
      <div className="max-w-[1368px] m-auto grid grid-cols-[auto,minmax(205px,432px)] gap-[16px] max-md:grid-cols-[1fr] max-md:gap-[24px]">
        <div className="flex gap-[80px] max-md:justify-between max-md:gap-[20px]">
          <Link
            href="/movies-browser/movies"
            className="decoration-none flex items-center gap-[12px] text-white max-md:gap-[8px]"
          >
            <Image
              src={Icon}
              alt="icon"
              width={0}
              height={0}
              className=" max-md:h-[17px] max-md:w-[17px]"
            />
            <p className="text-[24px] font-medium max-md:text-[13px]">
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
