"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

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

console.log(personalMoviesDB);
