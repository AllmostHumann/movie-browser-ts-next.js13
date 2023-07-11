import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { PersonDetailsResponse } from "../../types/people/personDetails";

interface personDetailsProps {
  person_id: string;
}

export const fetchPersonDetails = async ({ person_id }: personDetailsProps) => {
  const response = await axiosInstance.get<PersonDetailsResponse>(
    `${apiConfig.personDetailsAndCredits.endpoint}${person_id}`
  );
  return response.data;
};
