"use strick";

const API_KEY = 'YOUR_TMBD_API_KEY_HERE'  // Add your TMBD API key 
const imageBaseURL = "https://image.tmdb.org/t/p/";


const fetchDataFromServer = (url, callback, optionalParam) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, API_KEY, fetchDataFromServer };
