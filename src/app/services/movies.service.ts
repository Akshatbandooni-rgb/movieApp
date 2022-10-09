import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import requests from '../shared/enums/requests';
import { map, Observable } from 'rxjs';
import { Movies } from '../shared/models/Movies';
import { MovieById } from '../shared/models/MovieById';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3/movie';
  private API_KEY = '8dd5cd73d6844237ff0a64d30ae44e7f';
  constructor(private http: HttpClient) {}

  public getLatestMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(requests.fetchLatest).pipe(
      map((val) => {
        debugger;
        return this.extractData(val);
      })
    );
  }
  public getNowPlayingMovies(): Observable<Movies[]> {
    return this.http
      .get<Movies[]>(requests.fetchNowPlaying)
      .pipe(map((val) => this.extractData(val)));
  }
  public getPopularMovies(): Observable<Movies[]> {
    return this.http
      .get<Movies[]>(requests.fetchPopular)
      .pipe(map((val) => this.extractData(val)));
  }
  public getTopRatedMovies(): Observable<Movies[]> {
    return this.http
      .get<Movies[]>(requests.fetchTopRated)
      .pipe(map((val) => this.extractData(val)));
  }
  public getMovieById(movieId: number): Observable<MovieById> {
    return this.http.get<MovieById>(
      `${this.baseUrl}/${movieId}?api_key=${this.API_KEY}&language=en-US`
    );
  }
  public extractData(data: any) {
    return data.results ? data.results : data;
  }
}
