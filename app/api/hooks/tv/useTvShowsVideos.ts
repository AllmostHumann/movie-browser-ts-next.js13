import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { TvVideoResponse } from "../../types/tv/tvShowsVideos";

interface TvVideoProps {
  id: string | string[];
}

export const fetchTvShowVideo = async ({ id }: TvVideoProps) => {
  const response = await axiosInstance.get<TvVideoResponse>(
    `${apiConfig.tvShowsDetailsAndCredits.endpoint}${id}/videos`
  );
  return response.data;
};
