import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private searchInput: string = '';

  constructor() {}

  ngOnInit(): void {
    this.searchInput = '';
  }
  public search(event: any) {
    this.searchInput = event.target.value;
    console.log(event.target.value);
  }
}
