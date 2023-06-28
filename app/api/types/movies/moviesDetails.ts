import { GenresResults } from "../genres/genres";

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface MovieDetailsResponse {
  backdrop_path?: string | null;
  genres?: GenresResults[];
  id?: number;
  original_title?: string;
  overview?: string | null;
  poster_path?: string | null;
  production_countries?: ProductionCountry[];
  release_date?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
}
