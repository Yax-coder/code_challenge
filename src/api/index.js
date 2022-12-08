import axios from "axios";

export const BASE_API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const BASE_AXIOS = axios.create({
  baseURL: "https://api.themoviedb.org/3%22%7D",
});
export const API_KEY = "14ccdb96456935bbb41591e99697d262";
export const Popular_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&page=1";
export const Discover_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

//export const detail_url= `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=14ccdb96456935bbb41591e99697d262&language=en-US`
export const img_url = "http://image.tmdb.org/t/p/w500";
export const fetchSingleMovie = (movieId) =>
  BASE_AXIOS.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

export const fetchSingleMovieCredits = (movieId) =>
  BASE_AXIOS.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
export const fetchReviews = (movieId) =>
  BASE_AXIOS.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
export const fetchRecommendations = (movieId) =>
  BASE_AXIOS.get(`/movie/${movieId}/similar?api_key=${API_KEY}`);

export const fetchPopularMovies = (page) =>
  BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}&page=${page}`);
export const fetchTopRatedMovies = (page) =>
  BASE_API.get(`/movie/top_rated?api_key=${API_KEY}&page=${page}`);

export const fetchGenres = () =>
  BASE_AXIOS.get(`/genre/movie/list?api_key=${API_KEY}/1013860`);

export const fetchPopularMovie = () =>
  BASE_API.get(`movie/popular?api_key=${API_KEY}`);

export const fetchTopRatedMovie = () =>
  BASE_API.get(`movie/top_rated?api_key=${API_KEY}`);

export const fetchTopRatedPopular = (category, page) =>
  BASE_AXIOS.get(`/movie/${category}?api_key=${API_KEY}&page=${page}`);
