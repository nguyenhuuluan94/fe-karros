import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../core/services/movie.service';
import {Movie} from '../../core/models/movie.model';
import { MatTabChangeEvent } from '@angular/material/tabs';

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

  tabChanged(event: MatTabChangeEvent): boolean {
    console.log('Tab Changed: ', event);
    if (event.index === 3) {
      return false;
    }
    return true;
  }

  openMenu($event: MouseEvent): void {
    $event.stopPropagation();
  }
}
