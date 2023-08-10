export interface MultiSearchResult {
  id?: number;
  title?: string;
  poster_path?: string | null;
  release_date?: string;
  backdrop_path?: string | null;
  genre_ids?: number[];
  vote_count?: number;
  vote_average?: number;
  profile_path?: string;
  name?: string;
  first_air_date?: string;
  original_title?: string;
}

export interface MultiSearchResponse {
  page?: number;
  results?: MultiSearchResult[];
  total_results?: number;
  total_pages?: number;
}
