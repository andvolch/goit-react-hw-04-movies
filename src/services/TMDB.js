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
    }
    catch (error) {
        console.error(error);
  }
  
}

// console.log(getTrending());