import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MovieCreditsResponse } from "../../types/movies/moviesCredits";

interface movieCreditsProps {
  id: string | string[];
}

export const fetchMovieCredits = async ({ id }: movieCreditsProps) => {
  const response = await axiosInstance.get<MovieCreditsResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}${id}/credits`
  );
  return response.data;
};
