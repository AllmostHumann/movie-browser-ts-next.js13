import { useQuery } from "@tanstack/react-query";
import { fetchMoviesGenresData } from "@/app/api/hooks/genres/useGenres";
import { MoviesListResult } from "@/app/api/types/movies/popularMovies";

export const MoviesGenres = (movies: MoviesListResult) => {
  const { data } = useQuery({
    queryKey: ["moviesGenres"],
    queryFn: fetchMoviesGenresData,
  });

  const filteredGenres = movies.genre_ids?.map(
    (genre) => data?.filter(({ id }) => genre === id)
  );

  return (
    <div className="flex flex-wrap gap-[4px] ml-[8px] md:ml-0 text-[10px] font-normal leading-normal md:text-[14px]">
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
