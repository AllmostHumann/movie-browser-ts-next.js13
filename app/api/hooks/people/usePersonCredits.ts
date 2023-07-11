import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { PersonCreditsResponse } from "../../types/people/personCredits";

interface personCreditsProps {
  id: string;
}

export const fetchPersonCredits = async ({ id }: personCreditsProps) => {
  const response = await axiosInstance.get<PersonCreditsResponse>(
    `${apiConfig.personDetailsAndCredits.endpoint}/${id}/movie_credits`,
    
  );
  return response.data;
};
