export interface PersonCast {
  character?: string;
  credit_id?: string;
  release_date?: string;
  vote_count?: number;
  vote_average?: number;
  title?: string;
  genre_ids?: number[];
  id?: number;
  poster_path?: string | null;
}

export interface PersonCrew {
  id?: number;
  job?: string;
  vote_count?: number;
  poster_path?: string | null;
  title?: string;
  genre_ids?: number[];
  vote_average?: number;
  release_date?: string;
  credit_id?: string;
}

export interface PersonCreditsResponse {
  cast?: PersonCast[];
  crew?: PersonCrew[];
  id?: number;
}
