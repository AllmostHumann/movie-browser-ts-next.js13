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
      link: "/movies",
    },
    {
      name: "PEOPLE",
      link: "/people",
    },
  ];

  return (
    <nav className="m-0 flex list-none gap-[16px] p-0 mobileMax:ml-[30px] mobileMax:gap-[12px]">
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
    </nav>
  );
};
