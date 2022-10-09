import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieById } from 'src/app/shared/models/MovieById';
import { Movies } from 'src/app/shared/models/Movies';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  public routeParam: Subscription = new Subscription();
  public movieId: number = 0;
  public movie: MovieById = new MovieById();
  public baseMovieUrl: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.routeParam = this.activatedRoute.params.subscribe((params) => {
      this.movieId = params['id'];
    });
    //** get movie detail based on id */
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (movie: MovieById) => {
        console.log(this.movie);

        this.movie = movie;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
    this.baseMovieUrl = 'https://image.tmdb.org/t/p/original';
  }
  ngOnDestroy() {
    this.routeParam.unsubscribe();
  }
}
