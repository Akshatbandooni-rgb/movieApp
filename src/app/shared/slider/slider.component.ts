import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from '../models/Movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('3s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  public movies: Movies[] = [];
  public baseMovieUrl: string = '';
  public currentSlideIndex: number = 0;
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.baseMovieUrl = 'https://image.tmdb.org/t/p/original';
    this.getPopularMovies();
  }
  private getPopularMovies() {
    this.movieService.getPopularMovies().subscribe({
      next: (latestMovies: Movies[]) => {
        this.movies = latestMovies;
        this.toogleVisibility();
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
  private toogleVisibility() {
    setInterval(() => {
      console.log(this.currentSlideIndex);

      this.currentSlideIndex = ++this.currentSlideIndex % this.movies.length;
    }, 5000);
  }
}
