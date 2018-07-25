import { Injectable } from '@angular/core';
import {movies} from 'sample-movies.js'

export interface Movies {
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
  theMovies: Array<Movies> = movies;

  getMovies(){
    return this.theMovies;
  }
  getMovie(id){
    console.log(id)
    return this.theMovies.filter(e => e.id == id)
  }
}