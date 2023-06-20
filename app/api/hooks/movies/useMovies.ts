import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MoviesListResult, MoviesResponse } from "../../types/movies/movies";

export const fetchMovieData = async ({ page }: { page: number }) => {
  const response = await axiosInstance.get<MoviesResponse>(
    `${apiConfig.movies.endpoint}&page=${page}`
  );
  return response.data.results;
};