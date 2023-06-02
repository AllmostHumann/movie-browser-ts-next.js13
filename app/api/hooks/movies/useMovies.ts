import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MoviesListResult, MoviesResponse } from "../../types/movies/movies";

export const fetchMovieData = async () => {
  const response = await axiosInstance.get<MoviesResponse>(
    apiConfig.movies.endpoint
  );
  return response.data.results;
};
