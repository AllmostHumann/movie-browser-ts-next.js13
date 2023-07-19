import { useQuery } from "@tanstack/react-query";
import { fetchGenresData } from "@/app/api/hooks/genres/useGenres";
import { MoviesListResult } from "@/app/api/types/movies/popularMovies";

export const Genres = (movies: MoviesListResult) => {
  const { data } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenresData,
  });

  const filteredGenres = movies.genre_ids?.map(
    (genre) => data?.filter(({ id }) => genre === id)
  );

  return (
    <div className="flex flex-wrap gap-[8px] text-[10px] font-normal leading-normal md:text-[14px]">
      {filteredGenres?.map(
        (genre) =>
          genre?.map(({ name }) => (
            <div
              key={name}
              className="flex rounded-[5px] bg-mystic px-[8px] py-[4px] text-smoke md:px-[16px] md:py-[8px]"
            >
              {name}
            </div>
          ))
      )}
    </div>
  );
};
