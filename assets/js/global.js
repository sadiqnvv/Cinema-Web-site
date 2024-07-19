"use strick";

const addEventOfElements = (elements, eventType, callback) => {
  elements.forEach((el) => el.addEventListener(eventType, callback));
};

const searchBox = document.querySelector("[search-box]");
// const searchInput = document.querySelector(".searc-box input");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOfElements(searchTogglers, "click", () => {
  searchBox.classList.toggle("active");
  searchInput.value = "";
});

/**
 * store movieId in `localStorage` when you click any movie card
 */

const getMovieDetail = (movieId) => {
  window.localStorage.setItem("movieId", String(movieId));
};

const getMovieList = (urlParam, genreName) => {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
};
