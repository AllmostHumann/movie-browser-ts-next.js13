import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { TvResponse } from "../../types/tv/popularTvShows";

interface tvShowsProps {
  page: number;
}

export const fetchMoviesData = async ({ page }: tvShowsProps) => {
  const response = await axiosInstance.get<TvResponse>(
    `${apiConfig.tvShows.endpoint}`,
    { params: { page } }
  );
  return response.data;
};
