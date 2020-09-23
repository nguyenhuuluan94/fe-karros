import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../core/services/movie.service';
import {Movie} from '../../core/models/movie.model';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
    selector: 'app-movie-tabs',
    templateUrl: './movie-tabs.component.html',
    styleUrls: ['./movie-tabs.component.scss']
})
export class MovieTabsComponent implements OnInit {
    movies: Movie[] = [];
    genres: string[];

    constructor(private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.getMovieList();
        this.getGenreList();
    }

    getMovieList(): void {
        this.movieService.getMovies().subscribe(
            movies => {
                this.movies = movies;
            }
        );
    }

    getGenreList(): void {
        this.movieService.getGenres().subscribe(
            genres => {
                this.genres = genres;
            }
        );
    }

    tabChanged(event: MatTabChangeEvent): boolean {
        if (event.index === 3) {
            return false;
        }
        return true;
    }

    openMenu($event: MouseEvent): void {
        $event.stopPropagation();
    }
}
