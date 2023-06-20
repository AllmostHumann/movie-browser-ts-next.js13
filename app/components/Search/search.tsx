"use client";

import Image from "next/image";
import SearchIcon from "./images/searchIcon.svg";
import { fetchMovieQuery } from "@/app/api/hooks/queries/useQuery";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useReplaceQueryParameter } from "@/app/api/hooks/queries/useReplaceQueryParameter";
import useQueryParameter, {
  searchQueryParamName,
} from "@/app/api/hooks/queries/useQueryParameter";

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParam = useReplaceQueryParameter();

  const { isLoading, error, data } = useQuery({
    queryKey: ["query", query],
    queryFn: () => fetchMovieQuery({ query }),
    keepPreviousData: true,
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    replaceQueryParam(value);
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
        <Image
          src={SearchIcon}
          alt="searchIcon"
          className="h-[21px] w-[16px] text-waterloo md:w-[21px]"
        />
      </div>
      <input
        
        value={query || ""}
        onChange={onInputChange}
        className="h-[44px] w-full rounded-l-[0] rounded-r-[33px] border-[1px] border-solid  border-mystic/0 bg-white p-[19px] text-black outline-none placeholder:text-[16px]"
        placeholder={
          location.pathname.includes("people")
            ? "Search for people..."
            : "Search for movies..."
        }
      />
    </div>
  );
};
