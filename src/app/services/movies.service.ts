import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import requests from '../shared/enums/requests';
import { map, Observable } from 'rxjs';
import { Movies } from '../shared/models/Movies';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
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
  public extractData(data: any) {
    //debugger;
    return data.results ? data.results : data;
  }
}
