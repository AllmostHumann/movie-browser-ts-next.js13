export interface TvVideoResults {
  id?: number;
  name?: string;
  key?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
}

export interface TvVideoResponse {
  id?: number;
  results?: TvVideoResults[];
}
