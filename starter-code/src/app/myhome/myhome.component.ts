import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/moviesServices';
import { Router } from '@angular/router'

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  
  cinema: any;

  constructor(public movieService:movieService, public router: Router) { 
    this.cinema = this.movieService.getMovies();
  }
    
  ngOnInit() {
  }

  getMovie(id){
    this.router.navigate(['/movie', id]);
  }

}
