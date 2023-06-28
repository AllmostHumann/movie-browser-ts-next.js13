import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MovieCreditsResponse } from "../../types/movies/moviesCredits";

interface movieCreditsProps {
  id: number;
}

export const fetchMovieCredits = async ({ id }: movieCreditsProps) => {
  const response = await axiosInstance.get<MovieCreditsResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}/credits`,
    { params: { id } }
  );
  return response.data;
};
