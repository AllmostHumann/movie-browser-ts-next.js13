import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { PersonDetailsResponse } from "../../types/people/personDetails";

interface personDetailsProps {
  id: string;
}

export const fetchPersonDetails = async ({ id }: personDetailsProps) => {
  const response = await axiosInstance.get<PersonDetailsResponse>(
    `${apiConfig.personDetailsAndCredits.endpoint}${id}`
  );
  return response.data;
};
