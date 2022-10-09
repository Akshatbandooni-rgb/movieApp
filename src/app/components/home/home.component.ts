import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import bannerTypes from 'src/app/shared/enums/bannerTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public bannerTypes: string[] = [];
  constructor() {}

  ngOnInit(): void {
    //debugger;
    this.bannerTypes = Object.keys(bannerTypes);
  }
}
