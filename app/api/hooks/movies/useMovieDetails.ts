import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MovieDetailsResponse } from "../../types/movies/moviesDetails";

interface movieDetailsProps {
  id: number;
}

export const fetchMovieDetails = async ({ id }: movieDetailsProps) => {
  const response = await axiosInstance.get<MovieDetailsResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}`,
    { params: { id } }
  );
  return response.data;
};

