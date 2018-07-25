import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../services/moviesServices';

@Component({
  selector: 'app-mymovie',
  templateUrl: './mymovie.component.html',
  styleUrls: ['./mymovie.component.css']
})
export class MymovieComponent implements OnInit {

  id: number;
  peli: any;

  constructor(public movieService : movieService, public route : ActivatedRoute) { 
    this.route.params.subscribe((params) => this.id = params.id);
    console.log(this.id)
  }
  
  ngOnInit() {
    this.peli = this.movieService.getMovie(this.id);
    console.log(this.peli)
  }

}
