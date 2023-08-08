import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { TVCreditsResponse } from "../../types/tv/tvShowsCredits";

interface tvShowCreditsProps {
  id: string | string[];
}

export const fetchMovieCredits = async ({ id }: tvShowCreditsProps) => {
  const response = await axiosInstance.get<TVCreditsResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}${id}/credits`
  );
  return response.data;
};
