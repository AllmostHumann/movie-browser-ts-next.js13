import { axiosInstance } from "../../utilities/axiosInstance";
import { apiConfig } from "../../config/apiRoutes";
import { MoviesResponse } from "../../types/movies/popularMovies";
import { PeopleResponse } from "../../types/people/popularPeople";
import { TvResponse } from "../../types/tv/popularTvShows";

interface queryProps {
  query: string | null;
  page: number;
}

export const fetchMovieQuery = async ({ query, page }: queryProps) => {
  const response = await axiosInstance.get<MoviesResponse>(
    `${apiConfig.searchMovie.endpoint}`,
    { params: { query, page } }
  );
  return response.data;
};

export const fetchTvShowQuery = async ({ query, page }: queryProps) => {
  const response = await axiosInstance.get<TvResponse>(
    `${apiConfig.searchTvShow.endpoint}`,
    { params: { query, page } }
  );
  return response.data;
};

export const fetchPersonQuery = async ({ query, page }: queryProps) => {
  const response = await axiosInstance.get<PeopleResponse>(
    `${apiConfig.searchPerson.endpoint}`,
    { params: { query, page } }
  );
  return response.data;
};
