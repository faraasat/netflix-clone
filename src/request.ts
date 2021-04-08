import dotenv from "dotenv";
dotenv.config();

const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-us`,
  fetchActionMovie: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_generes=28`,
  fetchComedyMovie: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_generes=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_generes=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_generes=99`,
};

export default requests;
