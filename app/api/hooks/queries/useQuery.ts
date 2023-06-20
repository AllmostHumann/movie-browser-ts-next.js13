import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";


export const fetchMovieQuery = async ({ query }: { query: string | null }) => {
  const response = await axiosInstance.get(
    `${apiConfig.searchMovie.endpoint}&query=${query}`
  );
  return response.data.results;
};
