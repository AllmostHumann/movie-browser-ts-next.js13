import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { TvVideoResponse } from "../../types/tv/tvShowsVideos";

interface TvVideoProps {
  id: string | string[];
}

export const fetchMovieVideo = async ({ id }: TvVideoProps) => {
  const response = await axiosInstance.get<TvVideoResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}${id}/videos`
  );
  return response.data;
};
