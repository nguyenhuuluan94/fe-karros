import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthService} from './auth.service';
import {Movie} from '../models/movie.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private url = 'https://api.themoviedb.org/4/list/1';

    constructor(private http: HttpClient, private auth: AuthService) {
    }

    getMovies(): Observable<Movie[]> {
        return this.http.get(this.url + `?` + this.apiKey)
            .pipe(map((res: any) => {
                    return res.results.map(item => new Movie(item));
                }
            ));
    }

    getGenres(): Observable<string[]> {
        // sorry I cannot find the API for the list genre in the movieDB
        // I will mock the data here
        return of([
            'action', 'adventure', 'fantasy', 'horror'
            ]
        );
    }

    private get apiKey(): string {
        return 'api_key=' + this.auth.getToken();
    }
}
