import Image from "next/image";
import SearchIcon from "./images/searchIcon.svg";

export const Search = () => {
  return (
    <div className="flex items-center">
      <div className="flex h-[44px] w-[50px] items-center justify-end rounded-l-[33px] bg-white text-waterloo max-md:h-[44px] max-md:w-[35px]">
        <Image
          src={SearchIcon}
          alt="searchIcon"
        />
      </div>
      <input
        className="h-[44px] w-full rounded-l-[0] rounded-r-[33px] border-[1px] border-solid  border-mystic/0 bg-white p-[19px] outline-none max-md:placeholder:text-[16px]"
        placeholder="Search..."
      />
    </div>
  );
};
