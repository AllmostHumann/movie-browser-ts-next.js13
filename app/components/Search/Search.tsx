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
      className="flex items-center bg-white rounded-l-[33px] rounded-r-[33px] overflow-hidden"
    >
      <SearchIcon className="w-[21px] h-[21px] flex ml-5 items-center justify-end text-waterloo" />
      <DebounceInput
        value={query || ""}
        onChange={onInputChange}
        debounceTimeout={300}
        className="h-[44px] w-full border-none placeholder:text-[16px] focus:border-none focus:ring-0 outline-none"
        placeholder={
          pathname.includes("people")
            ? "Search for people..."
            : "Search for movies..."
        }
      />
    </div>
  );
};
