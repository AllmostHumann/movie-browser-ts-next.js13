"use client";
import { DebounceInput } from "react-debounce-input";
import { usePathname } from "next/navigation";
import SearchIcon from "./images/searchIcon.svg";
import { useReplaceQueryParameter } from "@/app/api/hooks/queries/useReplaceQueryParameter";
import useQueryParameter, {
  searchQueryParamName,
} from "@/app/api/hooks/queries/useQueryParameter";

export const Search = () => {
  const pathname = usePathname();
  const replaceQueryParam = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    replaceQueryParam({ value });
  };

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div
      onSubmit={onFormSubmit}
      className="flex items-center"
    >
      <div className="flex h-[44px] w-[35px] items-center justify-end rounded-l-[33px] bg-white text-waterloo md:h-[44px] md:w-[50px]">
        <SearchIcon className="w-[21px] h-[21px]" />
      </div>
      <DebounceInput
        value={query || ""}
        onChange={onInputChange}
        debounceTimeout={300}
        className="h-[44px] w-full rounded-l-[0] rounded-r-[33px] border-solid  border-mystic/0 bg-white p-[19px] text-black  placeholder:text-[16px]  focus:border-none focus:ring-0"
        placeholder={
          pathname.includes("people")
            ? "Search for people..."
            : "Search for movies..."
        }
      />
    </div>
  );
};
