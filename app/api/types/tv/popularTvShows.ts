export interface TvListResult {
  id?: number;
  name?: string;
  poster_path?: string | null;
  first_air_date?: string;
  backdrop_path?: string | null;
  genre_ids?: number[];
  vote_count?: number;
  vote_average?: number;
}

export interface TvResponse {
  page?: number;
  results?: TvListResult[];
  total_results?: number;
  total_pages?: number;
}
