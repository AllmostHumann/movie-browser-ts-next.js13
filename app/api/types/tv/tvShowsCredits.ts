export interface CastMember {
  id?: number;
  name?: string;
  profile_path?: string | null;
  credit_id?: number;
  character?: string;
}

export interface CrewMember {
  id?: number;
  name?: string;
  profile_path?: string | null;
  credit_id?: number;
  job?: string;
}

export interface TVCreditsResponse {
  id?: number;
  cast?: CastMember[];
  crew?: CrewMember[];
}
