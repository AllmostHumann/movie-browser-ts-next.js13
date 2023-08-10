import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { GenresResponse } from "../../types/genres/genres";

export const fetchMoviesGenresData = async () => {
  const response = await axiosInstance.get<GenresResponse>(
    apiConfig.movieGenres.endpoint
  );
  return response.data.genres;
};

export const fetchTvShowsGenresData = async () => {
  const response = await axiosInstance.get<GenresResponse>(
    apiConfig.tvShowGenres.endpoint
  );
  return response.data.genres;
};
