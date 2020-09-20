import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
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
        return this.http.get(this.url + `?api_key=${this.auth.getToken()}`)
            .pipe(map((res: any) => {
                    return res.results.map(item => new Movie(item));
                }
            ));
    }
}
