import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/moviesServices'

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {
  
  cinema: any;

  constructor(public movieService:movieService) { 

    this.cinema = this.movieService.getMovies();
  }
    
  ngOnInit() {
  }

}
