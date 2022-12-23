"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const lastMovieWatched = prompt("One of the last movies watched?", "");
const rating = +prompt("How much would you rate it?", "");
const lastMovieWatched2 = prompt("One of the last movies watched?", "");
const rating2 = +prompt("How much would you rate it?", "");

personalMoviesDB.movies[lastMovieWatched] = rating;
personalMoviesDB.movies[lastMovieWatched2] = rating2;

console.log(personalMoviesDB);
