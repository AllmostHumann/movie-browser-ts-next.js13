import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { GenresResponse } from "../../types/genres/genres";

export const fetchGenresData = async () => {
  const response = await axiosInstance.get<GenresResponse>(
    apiConfig.genres.endpoint
  );
  return response.data.genres;
};
