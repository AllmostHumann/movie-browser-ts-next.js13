import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MoviesResponse } from "../../types/movies/movies";

interface moviesProps {
  page: number;
}

export const fetchMovieData = async ({ page }: moviesProps) => {
  const response = await axiosInstance.get<MoviesResponse>(
    `${apiConfig.movies.endpoint}`,
    { params: { page } }
  );
  return response.data;
};
