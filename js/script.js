"use strict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMoviesDB.count = +prompt("How many movies have you watched?", "");

    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt("How many movies have you watched?", "");
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const lastMovieWatched = prompt("One of the last movies watched?", "");
      const rating = +prompt("How much would you rate it?", "");
      if (
        lastMovieWatched !== null &&
        rating != null &&
        lastMovieWatched !== "" &&
        rating != "" &&
        lastMovieWatched.length < 50
      ) {
        personalMoviesDB.movies[lastMovieWatched] = rating;
      } else {
        --i;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMoviesDB.count < 10) {
      console.log("Watched quite a few films");
    } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
      console.log("You are a classic viewer");
    } else if (personalMoviesDB.count > 30) {
      console.log("you are a cinephile");
    } else {
      console.warn("Some Error");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyDb: () => {
    if (personalMoviesDB.private) {
      personalMoviesDB.private = false;
    } else {
      personalMoviesDB.private = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      const genre = prompt(`Enter your favorite genres separated by commas`);
      if (genre === "" || genre === null) {
        console.log("You entered incorrect data or did not enter it at all");
        i--;
      } else {
        personalMoviesDB.genres = genre.toLowerCase().split(", ");
      }
      personalMoviesDB.genres.sort();
    }
    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Your favorite genre ${i + 1} it's ${item}`);
    });
  },
};

personalMoviesDB.start();
personalMoviesDB.rememberMyFilms();
personalMoviesDB.detectPersonalLevel();
personalMoviesDB.writeYourGenres();
