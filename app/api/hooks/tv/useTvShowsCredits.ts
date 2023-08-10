import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { TVCreditsResponse } from "../../types/tv/tvShowsCredits";

interface tvShowCreditsProps {
  id: string | string[];
}

export const fetchTvShowCredits = async ({ id }: tvShowCreditsProps) => {
  const response = await axiosInstance.get<TVCreditsResponse>(
    `${apiConfig.tvShowsDetailsAndCredits.endpoint}${id}/credits`
  );
  return response.data;
};
