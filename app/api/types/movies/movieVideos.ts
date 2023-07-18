export interface MovieVideoResults {
  id?: number;
  name?: string;
  key?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
}

export interface MovieVideoResponse {
  id?: number;
  results?: MovieVideoResults[];
}
