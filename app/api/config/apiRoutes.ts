export const apiBaseUrl = "https://api.themoviedb.org/3";
export const apiKey = "aea916461e048c73c93fe43e96a7f98d";
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
    endpoint: `${commonEndpoints.movie}/popular`,
  },
  moviesDetailsAndCredits: {
    endpoint: `${commonEndpoints.movie}/`,
  },
  people: {
    endpoint: `${commonEndpoints.person}/popular`,
  },
  personDetailsAndCredits: {
    endpoint: `${commonEndpoints.person}/`,
  },
  posters: {
    endpoint: `${apiImagesBaseUrl}/original`,
  },
  posterW154: {
    endpoint: `${apiImagesBaseUrl}/w154`,
  },
  posterW400: {
    endpoint: `${apiImagesBaseUrl}/w400`,
  },
  posterW780: {
    endpoint: `${apiImagesBaseUrl}/w780`,
  },
  genres: {
    endpoint: `${commonEndpoints.genre}/movie/list`,
  },
  searchMovie: {
    endpoint: `${commonEndpoints.search}/movie`,
  },
  searchPerson: {
    endpoint: `${commonEndpoints.search}/person`,
  },
};
