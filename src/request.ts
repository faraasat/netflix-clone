const api_key = "2e24eb09e7f607bc25017d298ee263ad";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-us`,
  fetchActionMovie: `/discover/movie?api_key=${api_key}&with_generes=28`,
  fetchComedyMovie: `/discover/movie?api_key=${api_key}&with_generes=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${api_key}&with_generes=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${api_key}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_generes=99`,
};

export default requests;
