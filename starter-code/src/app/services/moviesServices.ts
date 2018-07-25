import { Injectable } from '@angular/core';
import {movies} from 'sample-movies.js'

interface movies {
  id: Number;
  title: String;
  poster: String,
  synopsis: String,
  genres: Array<String>,
  year: Number,
  director: String,
  actors: Array<String>,
  hours: Array<String>,
  room: Number,
}

@Injectable()
export class movieService {
  theMovies: Array<movies> = [];

  getMovies(){
    console.log(this.theMovies)
    return this.theMovies;
  }
  getMovie(id){

  }
}