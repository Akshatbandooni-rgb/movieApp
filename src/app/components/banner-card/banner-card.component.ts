import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/shared/enums/imageSizes';
import { Movies } from 'src/app/shared/models/Movies';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss'],
})
export class BannerCardComponent implements OnInit {
  @Input() bannerCardData: Movies = new Movies();
  public changeText: boolean = false;
  public imageSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
  public showGradient() {
    console.log('show');

    this.changeText = true;
  }
  public hideGradient() {
    console.log('hide');

    this.changeText = false;
  }
}
