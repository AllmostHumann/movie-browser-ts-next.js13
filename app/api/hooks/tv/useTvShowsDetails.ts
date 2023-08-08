import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { TvDetailsResponse } from "../../types/tv/tvShowsDetails";

interface tvShowDetailsProps {
  id: string | string[];
}

export const fetchMovieDetails = async ({ id }: tvShowDetailsProps) => {
  const response = await axiosInstance.get<TvDetailsResponse>(
    `${apiConfig.tvShowsDetailsAndCredits.endpoint}${id}`
  );
  return response.data;
};
