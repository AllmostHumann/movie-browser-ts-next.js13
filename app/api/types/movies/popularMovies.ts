export interface MoviesListResult {
  id?: number;
  title?: string;
  poster_path?: string | null;
  release_date?: string;
  backdrop_path?: string | null;
  genre_ids?: number[];
  vote_count?: number;
  vote_average?: number;
}

export interface MoviesResponse {
  page?: number;
  results?: MoviesListResult[];
  total_results?: number;
  total_pages?: number;
}
