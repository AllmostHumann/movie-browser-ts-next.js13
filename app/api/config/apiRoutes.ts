export const apiBaseUrl = "https://api.themoviedb.org/3";
export const apiKey = "?api_key=aea916461e048c73c93fe43e96a7f98d";
export const apiLanguage = "&language=en-US";
export const apiImagesBaseUrl = "https://image.tmdb.org/t/p";

const commonEndpoints = {
  movie: "/movie",
  person: "/person",
  genre: "/genre",
  search: "/search",
};

export const apiConfig = {
  movies: {
    endpoint: `${commonEndpoints.movie}/popular${apiKey}${apiLanguage}`,
  },
  people: {
    endpoint: `${commonEndpoints.person}/popular${apiKey}${apiLanguage}`,
  },
  posters: {
    endpoint: `${apiImagesBaseUrl}/w400`,
  },
  genres: {
    endpoint: `${commonEndpoints.genre}/movie/list${apiKey}${apiLanguage}`,
  },
  searchMovie: {
    endpoint: `${commonEndpoints.search}/movie${apiKey}${apiLanguage}`,
  },
  searchPerson: {
    endpoint: `${commonEndpoints.search}/person${apiKey}${apiLanguage}`,
  },
};
