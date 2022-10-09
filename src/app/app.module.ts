import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { TVShowsComponent } from './components/tvshows/tvshows.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TrendingComponent } from './components/trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './shared/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { BannerComponent } from './components/banner/banner.component';
import { BannerCardComponent } from './components/banner-card/banner-card.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TVShowsComponent,
    MoviesComponent,
    TrendingComponent,
    SliderComponent,
    TruncatePipe,
    BannerComponent,
    BannerCardComponent,
    MovieDetailComponent,
    MovieBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
