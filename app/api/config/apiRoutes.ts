export const apiBaseUrl = "https://api.themoviedb.org/3";
export const apiKey = "aea916461e048c73c93fe43e96a7f98d";
export const apiLanguage = "&language=en-US";
export const apiImagesBaseUrl = "https://image.tmdb.org/t/p";

const commonEndpoints = {
  movie: "/movie",
  person: "/person",
  tvShow: "/tv",
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
  tvShows: {
    endpoint: `${commonEndpoints.tvShow}/popular`,
  },
  tvShowsDetailsAndCredits: {
    endpoint: `${commonEndpoints.tvShow}/`,
  },
  posters: {
    endpoint: `${apiImagesBaseUrl}/original`,
  },
  posterW342: {
    endpoint: `${apiImagesBaseUrl}/w342`,
  },
  posterW500: {
    endpoint: `${apiImagesBaseUrl}/w500`,
  },
  posterW780: {
    endpoint: `${apiImagesBaseUrl}/w780`,
  },
  posterW1280: {
    endpoint: `${apiImagesBaseUrl}/w1280`,
  },
  movieGenres: {
    endpoint: `${commonEndpoints.genre}/movie/list`,
  },
  tvShowGenres: {
    endpoint: `${commonEndpoints.genre}/tv/list`,
  },
  searchMulti: {
    endpoint: `${commonEndpoints.search}/multi`,
  },
};
