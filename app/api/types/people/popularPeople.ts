export interface PeopleListResult {
  profile_path?: string;
  id?: number;
  name?: string;
}

export interface PeopleResponse {
  page?: number;
  results?: PeopleListResult[];
  total_results?: number;
  total_pages?: number;
}