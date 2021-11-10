// KEY_API = e34f3290161d1b3f73683dcba0238c76

// example: https://api.themoviedb.org/3/movie/550?api_key=e34f3290161d1b3f73683dcba0238c76

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'e34f3290161d1b3f73683dcba0238c76';

axios.defaults.baseURL = BASE_URL;

function getTrending() {
  let params = `trending/movie/day?api_key=${KEY_API}`;

    
    return axios.get(params);
}

export default getTrending;