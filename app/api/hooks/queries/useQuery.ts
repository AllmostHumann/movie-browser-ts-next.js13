import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MoviesResponse } from "../../types/movies/movies";

interface queryProps {
  query: string | null;
  page: number;
}

export const fetchMovieQuery = async ({ query, page }: queryProps) => {
  const response = await axiosInstance.get<MoviesResponse>(
    `${apiConfig.searchMovie.endpoint}`,
    { params: { query, page } }
  );
  return response.data;
};

