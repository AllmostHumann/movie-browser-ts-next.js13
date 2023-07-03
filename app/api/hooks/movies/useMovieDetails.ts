import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MovieDetailsResponse } from "../../types/movies/moviesDetails";

interface movieDetailsProps {
  id: string;
}

export const fetchMovieDetails = async ({ id }: movieDetailsProps) => {
  const response = await axiosInstance.get<MovieDetailsResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}${id}`
  );
  return response.data;
};
