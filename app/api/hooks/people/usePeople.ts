import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { PeopleResponse } from "../../types/people/popularPeople";

interface peopleProps {
  page: number;
}

export const fetchPeopleData = async ({ page }: peopleProps) => {
  const response = await axiosInstance.get<PeopleResponse>(
    `${apiConfig.people.endpoint}`,
    { params: { page } }
  );
  return response.data;
};
