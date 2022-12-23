"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies have you watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies have you watched?", "");
  }
}

start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("Watched quite a few films");
  } else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log("You are a classic viewer");
  } else if (personalMoviesDB.count > 30) {
    console.log("you are a cinephile");
  } else {
    console.warn("Some Error");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}
showMyDB(personalMoviesDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres[i - 1] = prompt(
      `Your favorite genre is numbered ${i}`
    );
  }
}
writeYourGenres();

console.log(personalMoviesDB);
