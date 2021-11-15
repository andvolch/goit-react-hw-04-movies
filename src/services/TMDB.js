import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'e34f3290161d1b3f73683dcba0238c76';

axios.defaults.baseURL = BASE_URL;

export async function getTrending(page) {
  let params = `trending/movie/day?api_key=${KEY_API}`;
  try {
    const response = await axios.get(params);
    const results = response.data.results;

    // console.log(response)
    // console.log(results);

    return results;
  } catch (error) {
    console.error(error);
  }
};

export async function searchMovies(query, page) {
  let params = `search/movie?query=${query}&api_key=${KEY_API}&language=en-US&page=${page}&include_adult=false`;
  try {
    const response = await axios.get(params);
    const results = response.data.results;

    // console.log(response)
    // console.log(results);

    return results;
  } catch (error) {
    console.error(error);
  }
};




export async function getMovieDetails(movie_id) {
  let params = `movie/${movie_id}?api_key=${KEY_API}&language=en-US`;
  try {
    const response = await axios.get(params);
    const results = response.data;

    // console.log(response)
    // console.log(results);

    return results;
  } catch (error) {
    console.error(error);
  }
};




export async function getMovieCredits(movie_id) {
  let params = `movie/${movie_id}/credits?api_key=${KEY_API}&language=en-US`;
  try {
    const response = await axios.get(params);
    const results = response.data.results;

    // console.log(response)
    // console.log(results);

    return results;
  } catch (error) {
    console.error(error);
  }
};



export async function getMovieReviews(movie_id) {
  let params = `movie/${movie_id}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
  try {
    const response = await axios.get(params);
    const results = response.data.results;

    // console.log(response)
    // console.log(results);

    return results;
  } catch (error) {
    console.error(error);
  }
};
