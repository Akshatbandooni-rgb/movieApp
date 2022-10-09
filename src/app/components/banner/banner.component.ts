import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/shared/models/Movies';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() bannerType: string = '';
  public bannerCards: Movies[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.bannerCards = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    switch (this.bannerType) {
      case 'fetchLatest':
        this.movieService.getNowPlayingMovies().subscribe({
          next: (data: Movies[]) => {
            console.log('Latest', data);
            this.bannerCards = data;
          },
          error: (error: any) => {
            console.log(error);
          },
        });
        break;
      case 'fetchNowPlaying':
        this.movieService.getNowPlayingMovies().subscribe({
          next: (data: Movies[]) => {
            console.log('NowPlaying', data);
            this.bannerCards = data;
          },
          error: (error: any) => {
            console.log(error);
          },
        });
        break;
      case 'fetchPopular':
        this.movieService.getPopularMovies().subscribe({
          next: (data: Movies[]) => {
            console.log('Popular', data);
            this.bannerCards = data;
          },
          error: (error: any) => {
            console.log(error);
          },
        });
        break;
      case 'fetchTopRated':
        this.movieService.getTopRatedMovies().subscribe({
          next: (data: Movies[]) => {
            console.log('TopRated', data);
            this.bannerCards = data;
          },
          error: (error: any) => {
            console.log(error);
          },
        });
        break;
      default:
        this.movieService.getPopularMovies().subscribe({
          next: (data: Movies[]) => {
            console.log('default', data);
            this.bannerCards = data;
          },
          error: (error: any) => {
            console.log(error);
          },
        });
        break;
    }
  }
  ngOnDestroy(): void {
    this.bannerCards = [];
  }
}
