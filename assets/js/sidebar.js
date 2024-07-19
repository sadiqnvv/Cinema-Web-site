"use strick";

import { API_KEY, fetchDataFromServer } from "./api.js";

export function sidebar() {
  /*
  fetch all genres eg: [{"id": "123", "name": "Action"}]
  then change genre format eg: {123: "Action"}
  */
  const genreList = {};

  fetchDataFromServer(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
    ({ genres }) => {
      for (const { id, name } of genres) {
        genreList[id] = name;
      }
      genreLink();
    }
  );

  const sidebarInner = document.createElement("div");
  sidebarInner.classList.add("sidebar-inner");
  sidebarInner.innerHTML = `
    <div class="sidebar-list">
      <p class="title">Genre</p>
    </div>

    <div class="sidebar-list">
      <p class="title">Language</p>

      <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=en", "English")'>English</a>

      <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=ru", "Russian")'>Russian</a>

      <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=tr", "Turkish")'>Turkish</a>

      <a href="./movie-list.html" menu-close class="sidebar-link" onclick='getMovieList("with_original_language=az", "Azerbaijan")'>Azerbaijan</a>
    </div>

    <div class="sidebar-footer">
      <p class="copyright">
        Copyright 2024
        <a href="https://github.com/sadiqnvv" target="_blank">Git Prof</a>
      </p>

      <img
        src="./assets/images/tmdb-logo.png"
        weight="130"
        height="17"
        alt="the movie database logo"
      />
    </div>
  `;
  const genreLink = () => {
    for (const [genreId, genreName] of Object.entries(genreList)) {
      const link = document.createElement("a");
      link.classList.add("sidebar-link");
      link.setAttribute("href", "./movie-list.html");
      link.setAttribute("menu-close", "");
      link.setAttribute(
        "onclick",
        `getMovieList("with_genres=${genreId}", "${genreName}")`
      );
      link.textContent = genreName;
      sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
    }

    const sidebar = document.querySelector("[sidebar]");
    sidebar.appendChild(sidebarInner);
    toggleSidebar(sidebar);
  };

  const toggleSidebar = (sidebar) => {
    /*
        Toggle sidebar in mobile screen
    */

    const sidebarBtn = document.querySelector("[menu-btn]");

    const sidebarTogglers = document.querySelectorAll("[menu-toggler]");

    const sidebarClose = document.querySelectorAll("[menu-close]");
    const overlay = document.querySelector("[overlay]");

    addEventOfElements(sidebarTogglers, "click", () => {
      sidebar.classList.toggle("active");
      sidebarBtn.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    addEventOfElements(sidebarClose, "click", () => {
      sidebar.classList.remove("active");
      sidebarBtn.classList.remove("active");
      overlay.classList.remove("active");
    });
  };
}
