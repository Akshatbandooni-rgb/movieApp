const API_KEY = '8dd5cd73d6844237ff0a64d30ae44e7f';
const requests = {
  fetchLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
