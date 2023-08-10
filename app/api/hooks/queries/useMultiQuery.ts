import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MultiSearchResponse } from "../../types/queries/multiQueries";

interface multiQueryProps {
  query: string | null;
  page: number;
}

export const fetchMultiQuery = async ({ query, page }: multiQueryProps) => {
  const response = await axiosInstance.get<MultiSearchResponse>(
    `${apiConfig.searchMulti.endpoint}`,
    { params: { query, page } }
  );
  return response.data;
};
