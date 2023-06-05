"use client";
import { useQuery } from "@tanstack/react-query";
import { GenresResults } from "@/app/api/types/genres/genres";
import { fetchGenresData } from "@/app/api/hooks/genres/useGenres";
import { MoviesListResult } from "@/app/api/types/movies/movies";

export const Genres = (movies: MoviesListResult, genres: GenresResults) => {
  const { data } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenresData,
  });

  const filteredGenres = movies.genre_ids?.map((genre) =>
    data?.filter(({ id }) => genre === id)
  );

  return (
    <div className="flex flex-wrap gap-[8px] text-[14px] font-normal leading-[1.4] md:px-[8px] md:py-[4px] md:text-[10px] md:leading-[11px]">
      {filteredGenres?.map((genre) =>
        genre?.map(({ name }) => (
          <div
            key={genres.id}
            className="flex rounded-[5px] bg-mystic px-[16px] py-[8px] text-smoke md:px-[8px] md:py-[4px]"
          >
            {name}
          </div>
        ))
      )}
    </div>
  );
};
