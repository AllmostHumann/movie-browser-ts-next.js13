"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  link: string;
}

export const Navigation = () => {
  const router: string = usePathname();

  const navLink: NavLink[] = [
    {
      name: "MOVIES",
      link: "/movies-browser/movies",
    },
    {
      name: "PEOPLE",
      link: "/movies-browser/people",
    },
  ];

  return (
    <nav className="ml-[30px] flex list-none gap-[12px] p-0 md:m-0 md:gap-[16px]">
      {navLink.map(({ link, name }) => (
        <Link
          key={name}
          href={link}
          className={`${
            router === link
              ? "decoration-none block rounded-[24px] border-[1px] border-solid border-white bg-none px-[24px] py-[8px] text-[12px] font-semibold text-white hover:cursor-pointer max-md:px-[12px] md:py-[13.5px] md:text-[14px]"
              : "decoration-none block rounded-[24px] border-[1px] border-none border-white bg-none px-[24px] py-[8px] text-[12px] font-semibold text-white hover:cursor-pointer max-md:px-[12px] md:py-[13.5px] md:text-[14px]"
          } `}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};
