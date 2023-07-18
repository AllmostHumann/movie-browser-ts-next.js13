import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MovieVideoResponse } from "../../types/movies/movieVideos";

interface movieVideoProps {
  id: string | string[];
}

export const fetchMovieVideo = async ({ id }: movieVideoProps) => {
  const response = await axiosInstance.get<MovieVideoResponse>(
    `${apiConfig.moviesDetailsAndCredits.endpoint}${id}/videos`
  );
  return response.data;
};
