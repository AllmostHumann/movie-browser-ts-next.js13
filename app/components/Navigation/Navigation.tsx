"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const link = [
    {
      name: "MOVIES",
      href: `/movies-browser/movies`,
    },
    {
      name: "TV SHOWS",
      href: "/movies-browser/tv",
    },
    {
      name: "PEOPLE",
      href: "/movies-browser/people",
    },
  ];

  return (
    <nav className="ml-[30px] flex list-none gap-[12px] p-0 md:m-0 md:gap-[16px]">
      {link?.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              isActive
                ? "decoration-none block rounded-[24px] border-[1px] border-solid border-white bg-none px-[24px] py-[8px] text-[12px] font-semibold text-white hover:cursor-pointer max-md:px-[12px] md:py-[13.5px] md:text-[14px]"
                : "decoration-none block rounded-[24px] border-[1px] border-none border-white bg-none px-[24px] py-[8px] text-[12px] font-semibold text-white hover:cursor-pointer max-md:px-[12px] md:py-[13.5px] md:text-[14px]"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
