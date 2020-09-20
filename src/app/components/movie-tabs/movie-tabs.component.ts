import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../core/services/movie.service';
import {Movie} from '../../core/models/movie.model';

@Component({
  selector: 'app-movie-tabs',
  templateUrl: './movie-tabs.component.html',
  styleUrls: ['./movie-tabs.component.scss']
})
export class MovieTabsComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      movies => {
        this.movies = movies;
      }
    );
  }

}
